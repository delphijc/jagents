#!/bin/bash
# Build all JAGENTS MCP servers

set -e  # Exit on error

echo "🚀 Building all JAGENTS MCP Servers..."
echo ""

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Array of servers to build
SERVERS=("agents-mcp-server" "skills-mcp-server" "workflows-mcp-server" "rules-mcp-server")

# Build each server
for server in "${SERVERS[@]}"; do
    echo "📦Building $server..."
    cd "$SCRIPT_DIR/$server"
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        echo "  📥 Installing dependencies..."
        npm install
    fi
    
    # Build
    echo "  🔨 Compiling TypeScript..."
    npm run build
    
    echo "  ✅ $server built successfully"
    echo ""
done

echo "🎉 All servers built successfully!"
echo ""
echo "Next steps:"
echo "1. Configure Gemini CLI with: gemini mcp add jagents-agents node $SCRIPT_DIR/agents-mcp-server/dist/index.js"
echo "2. See DEPLOYMENT_GUIDE.md for full setup"
