#!/bin/bash
# Link all JAGENTS MCP servers globally
# This script builds and links all 4 MCP servers for system-wide access

set -e  # Exit on any error

echo "🔗 Linking JAGENTS MCP Servers Globally"
echo "========================================"
echo ""

SERVERS=("agents-mcp-server" "skills-mcp-server" "workflows-mcp-server" "rules-mcp-server")
COMMAND_NAMES=("jagents-agents" "jagents-skills" "jagents-workflows" "jagents-rules")

for i in "${!SERVERS[@]}"; do
    SERVER="${SERVERS[$i]}"
    COMMAND="${COMMAND_NAMES[$i]}"
    
    echo "📦 Processing $SERVER..."
    cd "$SERVER"
    
    # Install dependencies
    echo "   Installing dependencies..."
    npm install --silent
    
    # Build
    echo "   Building TypeScript..."
    npm run build --silent
    
    # Link globally
    echo "   Linking as '$COMMAND'..."
    npm link --silent
    
    cd ..
    echo "   ✅ $COMMAND linked successfully"
    echo ""
done

echo "🎉 All JAGENTS MCP servers linked globally!"
echo ""
echo "Available commands:"
echo "  • jagents-agents"
echo "  • jagents-skills"
echo "  • jagents-workflows"
echo "  • jagents-rules"
echo ""
echo "Next steps:"
echo "1. Update ~/.gemini/settings.json to use command names"
echo "2. Run 'gemini mcp list' to verify registration"
echo "3. Test with 'which jagents-agents' to confirm global availability"
