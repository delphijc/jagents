# JAGENTS Rules MCP Server

MCP server that exposes all JAGENTS architectural and security rules as validation tools.

## Overview

This server provides 6 rule validators that enforce architectural best practices and security standards.

## Installation

```bash
cd jagents-mcp-servers/rules-mcp-server
npm install
npm run build
```

## Usage

### Running the Server

```bash
npm start
```

The server runs on stdio and communicates via MCP protocol.

### Available Rules

#### 1. Platform Portability
**Tool:** `jagents_rule_platform_portability`

Validates cross-platform compatibility (web, mobile, desktop, cloud).

**Checks:**
- Platform-agnostic architecture
- Browser compatibility
- Mobile platform support (iOS/Android)
- Desktop support (Windows/macOS/Linux)
- Cloud-native design

---

#### 2. Modular Architecture
**Tool:** `jagents_rule_modular_architecture`

Validates SOLID principles and modular design.

**Checks:**
- Single Responsibility
- Open/Closed Principle
- Liskov Substitution
- Interface Segregation
- Dependency Inversion
- Coupling and Cohesion metrics

---

#### 3. Mandatory Context Loading
**Tool:** `jagents_rule_mandatory_context_loading`

Ensures developers load necessary context before coding.

**Required Context:**
- Architecture documentation
- Coding standards
- Tech stack specifications
- User story/requirements
- Acceptance criteria

---

#### 4. Multi-Organization Isolation
**Tool:** `jagents_rule_multi_org_isolation`

Validates multi-tenant data isolation.

**Isolation Models:**
- Database-per-tenant (Highest isolation)
- Schema-per-tenant (Medium-high isolation)
- Row-level security (Medium isolation)

**Checks:**
- Tenant ID in all tables
- Access control policies
- Cross-tenant prevention
- Audit logging

---

#### 5. Cloud Storage Synchronization
**Tool:** `jagents_rule_cloud_storage_sync`

Validates cloud storage sync strategy.

**Strategies:**
- Real-time sync
- Batch sync
- Event-driven sync

**Checks:**
- Conflict resolution
- Offline support
- Delta synchronization
- Performance optimization

---

#### 6. Zero Trust Architecture
**Tool:** `jagents_rule_zero_trust_architecture`

Validates Zero Trust security principles (NIST SP 800-207).

**Principles:**
- Verify explicitly (MFA, continuous auth)
- Least privilege access (RBAC, ABAC)
- Assume breach (segmentation, encryption)

**Components:**
- Identity & Access Management
- Network segmentation
- Endpoint security
- Data protection
- Continuous monitoring

---

## Configuration

### Gemini CLI

Add to MCP servers:

```bash
gemini mcp add jagents-rules node /path/to/rules-mcp-server/dist/index.js
```

Or in `settings.json`:
```json
{
  "mcpServers": {
    "jagents-rules": {
      "command": "node",
      "args": ["/path/to/rules-mcp-server/dist/index.js"]
    }
  }
}
```

---

## Architecture

Rules:
- ✅ **Validation-focused** - Check compliance
- ✅ **Stateless** - No persistence
- ✅ **Informative** - Provide detailed reports
- ✅ **Actionable** - Concrete recommendations

---

## Development

### Project Structure

```
rules-mcp-server/
├── src/
│   ├── index.ts                        # Main server
│   └── rules/
│       ├── platform-portability.ts
│       ├── modular-architecture.ts
│       ├── mandatory-context-loading.ts
│       ├── multi-org-isolation.ts
│       ├── cloud-storage-sync.ts
│       └── zero-trust-architecture.ts
├── dist/                               # Compiled output
├── package.json
├── tsconfig.json
└── README.md
```

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

---

## License

MIT
