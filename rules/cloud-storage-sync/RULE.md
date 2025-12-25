# RULE: Cloud Storage and Synchronization

**Domain:** Infrastructure, Deployment, Accessibility  
**Type:** Architectural Requirement  
**Priority:** High  
**Source:** Requirements Document (jagent97.md)

---

## Rule Statement

THE Development Environment SHALL store all specs, code, and configurations in Git repositories hosted on GitHub, enabling full functionality after standard setup on any workstation within 30 minutes.

---

## User Story

As a security engineer working across multiple workstations, I want my development environment stored in the cloud, so that I can access it from any machine.

---

## Acceptance Criteria

### AC1: GitHub Storage
THE Development Environment SHALL store all specs, code, and configurations in Git repositories hosted on GitHub.

**Validation:**
- All content in GitHub repositories
- Regular commits and pushes
- Repository accessibility verified
- Proper .gitignore configuration

### AC2: Full Functionality After Clone
WHEN a user clones the repository on a new workstation, THE Development Environment SHALL be fully functional after standard setup procedures.

**Validation:**
- Clone fresh repository
- Run setup script
- Verify all functionality
- Document any manual steps

### AC3: Separate Repositories Per Organization
THE Development Environment SHALL maintain separate Git repositories for each organization context to enforce isolation.

**Validation:**
- One repository per organization
- No cross-repository dependencies
- Independent version control
- Clear naming conventions

### AC4: 30-Minute Setup
THE Development Environment SHALL include setup documentation that enables environment recreation on any workstation within 30 minutes.

**Validation:**
- Timed setup on new machine
- Clear documentation
- Automated setup script
- Minimal manual intervention

### AC5: Secret Management
WHERE credentials or secrets are required, THE Development Environment SHALL reference external secret management systems rather than storing secrets in repositories.

**Validation:**
- No secrets in Git history
- Environment variable usage
- Secret management integration
- Documentation of secret requirements

---

## Implementation Guidelines

### Repository Structure

```
org-<uuid>/
  ├── README.md
  ├── SETUP.md              # Setup instructions
  ├── setup.sh              # Automated setup script
  ├── .gitignore
  ├── specs/
  │   ├── agents/
  │   ├── skills/
  │   ├── workflows/
  │   └── rules/
  ├── code/
  ├── docs/
  └── config/
      └── .env.example      # Example environment variables
```

### Setup Script Template

```bash
#!/bin/bash
# setup.sh - Environment setup script
# Target: < 30 minutes on fresh workstation

set -e

echo "🚀 Setting up development environment..."

# 1. Check dependencies
check_dependencies() {
    echo "Checking dependencies..."
    command -v git >/dev/null 2>&1 || { echo "Git required"; exit 1; }
    command -v python3 >/dev/null 2>&1 || { echo "Python 3 required"; exit 1; }
    # Add other dependency checks
}

# 2. Install tools
install_tools() {
    echo "Installing tools..."
    pip3 install -r requirements.txt
    # Add other installations
}

# 3. Configure environment
configure_env() {
    echo "Configuring environment..."
    if [ ! -f .env ]; then
        cp config/.env.example .env
        echo "⚠️  Please configure .env with your secrets"
    fi
}

# 4. Verify setup
verify_setup() {
    echo "Verifying setup..."
    # Run basic tests
    python3 -m pytest tests/setup_test.py
}

# Execute setup
check_dependencies
install_tools
configure_env
verify_setup

echo "✅ Setup complete! Environment ready in $(date '+%H:%M:%S')"
```

### Secret Management

**DO NOT COMMIT:**
- API keys
- Passwords
- Tokens
- Certificates
- Private keys

**DO COMMIT:**
- `.env.example` with variable names
- Documentation of required secrets
- Secret management integration code

**External Secret Management:**
- AWS Secrets Manager
- HashiCorp Vault
- 1Password CLI
- Environment variables

### .gitignore Template

```gitignore
# Secrets
.env
.env.local
secrets/
*.key
*.pem

# Platform-specific
.claude/
.cursor/
.kiro/

# Dependencies
node_modules/
venv/
__pycache__/

# Build artifacts
dist/
build/
*.pyc

# Logs
*.log
logs/
```

---

## Workflow

### Initial Setup (First Time)

1. **Clone Repository**
   ```bash
   git clone https://github.com/org/project-uuid.git
   cd project-uuid
   ```

2. **Run Setup**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Configure Secrets**
   - Copy .env.example to .env
   - Fill in secret values
   - Configure secret management integration

4. **Verify**
   ```bash
   make test
   ```

### Regular Sync (Daily)

1. **Pull Latest**
   ```bash
   git pull origin main
   ```

2. **Update Dependencies**
   ```bash
   ./setup.sh --update-only
   ```

3. **Push Changes**
   ```bash
   git add .
   git commit -m "Update specs"
   git push origin main
   ```

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Secret exposure | Critical | Pre-commit hooks, scanning, .gitignore |
| Setup script failures | Medium | Comprehensive testing, error handling |
| Network dependency | Medium | Offline mode documentation |
| Repository bloat | Low | LFS for large files, regular cleanup |

---

## Testing Requirements

1. **Fresh Setup Testing**
   - Test on clean machine
   - Time the setup process
   - Verify < 30 minutes
   - Document any issues

2. **Secret Scanning**
   - Run git-secrets or similar
   - Check commit history
   - Validate .gitignore

3. **Cross-Platform Testing**
   - Test on macOS
   - Test on Linux
   - Test on Windows (if applicable)

---

## Related Rules

- [Multi-Organization Isolation](#) - Separate repositories
- [Platform Portability](#) - Platform-agnostic setup
- [Modular Architecture](#) - Component organization

---

## Compliance

- GitHub best practices
- Secret management standards
- Version control guidelines
- Documentation requirements
