#!/bin/bash
# Unlink all JAGENTS MCP servers from global installation
# Run this to clean up global symlinks

set -e  # Exit on any error

echo "🔓 Unlinking JAGENTS MCP Servers"
echo "================================="
echo ""

SERVERS=("agents-mcp-server" "skills-mcp-server" "workflows-mcp-server" "rules-mcp-server")
COMMAND_NAMES=("jagents-agents" "jagents-skills" "jagents-workflows" "jagents-rules")

for i in "${!SERVERS[@]}"; do
    SERVER="${SERVERS[$i]}"
    COMMAND="${COMMAND_NAMES[$i]}"
    
    echo "🗑  Unlinking $COMMAND..."
    cd "$SERVER"
    
    # Unlink globally (suppress errors if not linked)
    npm unlink -g 2>/dev/null || echo "   ⚠️  $COMMAND was not globally linked"
    
    cd ..
    echo "   ✅ Done"
    echo ""
done

echo "🎉 All JAGENTS MCP servers unlinked!"
echo ""
echo "To reinstall, run: ./link-all.sh"
