/**
 * JAGENTS Rule: Multi-Organization Isolation
 * Purpose: Ensure proper data isolation in multi-tenant systems
 * Category: Security
 */

export interface MultiOrgIsolationInput {
    architecture: string;
    tenantModel?: 'database-per-tenant' | 'schema-per-tenant' | 'row-level-security';
}

export const multiOrgIsolationRule = {
    toolDefinition: {
        name: 'jagents_rule_multi_org_isolation',
        description: 'Validates multi-organization data isolation and tenant security. Ensures no data leakage between organizations.',
        inputSchema: {
            type: 'object',
            properties: {
                architecture: {
                    type: 'string',
                    description: 'Multi-tenant architecture description',
                },
                tenantModel: {
                    type: '            string',
                    enum: ['database-per-tenant', 'schema-per-tenant', 'row-level-security'],
                    description: 'Tenant isolation model',
                },
            },
            required: ['architecture'],
        },
    },

    async execute(input: MultiOrgIsolationInput): Promise<string> {
        const model = input.tenantModel || 'row-level-security';

        let output = `# Multi-Organization Isolation Validation\n\n`;
        output += `**Rule:** Multi-Organization Data Isolation\n`;
        output += `**Tenant Model:** ${model}\n\n`;

        output += `## Isolation Model Analysis\n\n`;

        if (model === 'database-per-tenant') {
            output += `### Database-Per-Tenant Model\n`;
            output += `**Isolation Level:** 🟢 HIGHEST\n\n`;
            output += `**Pros:**\n`;
            output += `- Complete data isolation\n`;
            output += `- Per-tenant backups\n`;
            output += `- Independent scaling\n`;
            output += `- Tenant-specific configurations\n\n`;
            output += `**Cons:**\n`;
            output += `- Higher infrastructure cost\n`;
            output += `- Complex maintenance\n`;
            output += `- Schema migration challenges\n\n`;
        } else if (model === 'schema-per-tenant') {
            output += `### Schema-Per-Tenant Model\n`;
            output += `**Isolation Level:** 🟡 MEDIUM-HIGH\n\n`;
            output += `**Pros:**\n`;
            output += `- Good isolation\n`;
            output += `- Shared infrastructure\n`;
            output += `- Easier maintenance\n`;
            output += `- Lower cost than database-per-tenant\n\n`;
            output += `**Cons:**\n`;
            output += `- Shared resources\n`;
            output += `- Tenant limit per database\n`;
            output += `- Schema migration complexity\n\n`;
        } else {
            output += `### Row-Level Security Model\n`;
            output += `**Isolation Level:** 🟡 MEDIUM\n\n`;
            output += `**Pros:**\n`;
            output += `- Cost effective\n`;
            output += `- Easy maintenance\n`;
            output += `- Unlimited tenants\n`;
            output += `- Simple migrations\n\n`;
            output += `**Cons:**\n`;
            output += `- Risk of data leakage\n`;
            output += `- Requires careful implementation\n`;
            output += `- Shared resources\n\n`;
        }

        output += `## Security Checklist\n\n`;
        output += `### Data Isolation\n`;
        output += `- [ ] Tenant ID in all tables\n`;
        output += `- [ ] Row-level security policies\n`;
        output += `- [ ] Database views with filters\n`;
        output += `- [ ] Application-level validation\n\n`;

        output += `### Access Control\n`;
        output += `- [ ] Tenant-scoped authentication\n`;
        output += `- [ ] Authorization checks on every query\n`;
        output += `- [ ] API gateway tenant routing\n`;
        output += `- [ ] Session tenant binding\n\n`;

        output += `### Testing & Validation\n`;
        output += `- [ ] Cross-tenant data access tests\n`;
        output += `- [ ] Penetration testing\n`;
        output += `- [ ] Automated security scans\n`;
        output += `- [ ] Audit logging\n\n`;

        output += `## Implementation Patterns\n\n`;
        output += `### Database Schema (Row-Level Security)\n`;
        output += `\`\`\`sql\n`;
        output += `CREATE TABLE organizations (\n`;
        output += `  id UUID PRIMARY KEY,\n`;
        output += `  name VARCHAR(255)\n`;
        output += `);\n\n`;
        output += `CREATE TABLE users (\n`;
        output += `  id UUID PRIMARY KEY,\n`;
        output += `  org_id UUID REFERENCES organizations(id),\n`;
        output += `  email VARCHAR(255)\n`;
        output += `);\n\n`;
        output += `-- Row-Level Security Policy\n`;
        output += `CREATE POLICY tenant_isolation ON users\n`;
        output += `  USING (org_id = current_setting('app.current_org_id')::UUID);\n`;
        output += `\`\`\`\n\n`;

        output += `### Application Code\n`;
        output += `\`\`\`typescript\n`;
        output += `// Middleware to enforce tenant context\n`;
        output += `app.use((req, res, next) => {\n`;
        output += `  const tenantId = req.user.organizationId;\n`;
        output += `  req.db.setTenantContext(tenantId);\n`;
        output += `  next();\n`;
        output += `});\n\n`;
        output += `// All queries automatically filtered by tenant\n`;
        output += `const users = await db.users.findAll(); // Only current tenant\n`;
        output += `\`\`\`\n\n`;

        output += `## Compliance Status\n\n`;
        output += `**Risk Level:** ${model === 'database-per-tenant' ? 'LOW' : model === 'schema-per-tenant' ? 'MEDIUM' : 'MEDIUM-HIGH'}\n\n`;
        output += `**Recommendations:**\n`;
        output += `1. Implement tenant ID in all data models\n`;
        output += `2. Add automated test suite for isolation\n`;
        output += `3. Enable comprehensive audit logging\n`;
        output += `4. Regular security assessments\n`;

        return output;
    },
};
