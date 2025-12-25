BDD Security Rules


IAM

- [ ] As a CISO, I want to manage and control access to systems and data so that I can reduce the risk and impact of unauthorized access to sensitive data.
- [ ] As a Security Architect I want to ensure that default passwords are changed so I can minimize risk of password attacks
- [ ] As a Security Architect, I want to ensure that all users with administrative account access use a dedicated or secondary account for elevated activities. This account should only be used for administrative activities and not internet browsing, email, or similar activities.
- [ ] As a Security Architect, I want to ensure that where multi-factor authentication is not supported (such as local administrator, root, or service accounts), accounts will use passwords that are unique to that system.
- [ ] As a Security Architect, I want to use multi-factor authentication and encrypted channels for all administrative account access So I can reduce risk of account misuse
- [ ] As a Security Architect, I want to ensure administrators use a dedicated machine for all administrative tasks or tasks requiring administrative access so I can reduce the risk of malware and credential misuse
- [ ] As a CISO I want to implement least privilege so I can reduce the attack surface of my environment.
- [ ] As a Security Architect I want to manage all network devices using multi-factor authentication and encrypted sessions.
- [ ] As A CISO I need to prevent and detect unauthorized access so I can minimize the risk of a breach
- [ ] As a CISO, I want to manage and control access to systems and data so that I can reduce the risk and impact of unauthorized access to sensitive data.
- [ ] As a Security Architect I want to protect all information stored on systems with file system, network share, claims, application, or database specific access control lists. These controls will enforce the principle that only authorized ndividuals should have access to the information based on their need to access the information as a part of their responsibilities.
- [ ] As a CISO I need to actively manage user and system accounts so I can implement least privilege and reduce risk.
- [ ] As a Security Architect I want to require multi-factor authentication for all user accounts, on all systems, whether managed onsite or by a third-party provider.
- [ ] As a Security Architect I want to establish and follow an automated process for revoking system access by disabling accounts immediately upon termination or change of responsibilities of an employee or contractor.
- [ ] As a Security Architect I want to Disable any accounts that are not associated with a business process or owner so I can reduce the risk of unauthorized use
- [ ] As a Security Architect I want to disable accounts that have not been used in 90 days so I can reduce the risk of unauthorized use
- [ ] As a Security Architect I want to lock workstation sessions after 15 minutes of Inactivity so ican reduce the risk of unauthorized use
- [ ] As a Security Architect I want to maintain separate environments for production and nonproduction systems. Developers should not have unmonitored access to production environments.

DATA PROTECTION

- [ ] As a Security Architect, I want to store the master images and templates on securely configured servers, validated with integrity monitoring tools, to ensure that only authorized changes to the images are possible
- [ ] As A CISO I need to maintain a backup and recovery strategy so I can recover from incidents.
- [ ] As a Security Architect I want to ensure that all system data is automatically backed up on regular basis.
- [ ] As a Security Architect I want to require all remote login access to the organization's network to encrypt data in transit and use multi-factor authentication
- [ ] As a CISO , I want the tools and processes needed to prevent and detect the exfiltration of sensitive data so that I can ensure the privacy of sensitive information.
- [ ] As a Security Architect I want to deploy an automated tool on network perimeters that monitors for unauthorized transfer of sensitive information and blocks such transfers while alerting information security professionals.
- [ ] As a Security Architect I want to monitor all traffic leaving the organization and detect any unauthorized use of encryption.
- [ ] As a Security Architect I want to encrypt all sensitive information in transit.
- [ ] As a Security Architect I want to utilize an active discovery tool to identify all sensitive information stored, processed, or transmitted by the organization's Technology systems, including those located onsite or at a remote service provider and update the organization's sensitive information inventory.
- [ ] As a Security Architect I want to use an automated tool, such as host-based Data Loss Prevention, to enforce access controls to data even when data is copied off a system.
- [ ] As a Security Architect I want to encrypt all sensitive information at rest using a tool that requires a secondary authentication process not integrated into the operating system, in order to access the information.
- [ ] As a CISO, I want to ensure security is baked into the development lifecycle of all software and systems so I can prevent, detect and correct vulnerabilities.

LOGGING & MONITORING

- [ ] As a Security Architect, I want to configure systems to issue a log entry and alert when an account is added to or removed from any group assigned administrative privileges.
- [ ] As a Security Architect, I want to configure systems to issue a log entry and alert on unsuccessful logins to an administrative account.
- [ ] As a Security Architect, I want to utilize a Security Content Automation Protocol (SCAP) compliant configuration monitoring system to verify all security configuration elements, catalog approved exceptions, and alert when unauthorized changes occur.
- [ ] As A CISO , I want  to centralize and analyze audit logs from all systems so that I can detect and respond to security incidents.
- [ ] As a Security Architect I want to ensure that local logging has been enabled on all systems and networking devices so that I can audit and investigate security incidents
- [ ] As a Security Architect I want to ensure that security relevant logs from infrastructure, OS and applications logs are being aggregated to a central log management system for analysis and review.
- [ ] As a Security Architect I want to deploy Security Information and Event Management (SIEM) or log analytic tool for log correlation and analysis.
- [ ] As a Security Architect I want to log all URL requests from each of the organization's systems in so I can  identify potentially malicious activity and assist incident handlers with identifying potentially compromised systems.
- [ ] As a Security Architect I want to send all malware detection events to enterprise anti-malware administration tools and event log servers for analysis and alerting.
- [ ] As a Security Architect I want to enable Domain Name System (DNS) query logging to detect hostname lookups for known malicious domains.
- [ ] As a Security Architect I want to enable command-line audit logging for command shells, such as Microsoft Powershell and Bash.
- [ ] As a Security Architect I want configure monitoring systems to record network packets passing through the boundary at each of the organization's network boundaries.
- [ ] As a Security Architect I want to enable the collection of NetFlow and logging data on all network boundary devices.
- [ ] As a Security Architect I want to enforce detailed audit logging for access to sensitive data or changes to sensitive data (utilizing tools such as File Integrity Monitoring or Security Information and Event Monitoring).
- [ ] As a Security Architect I want to monitor attempts to access deactivated accounts through audit logging.
- [ ] As a Security Architect I want an alert when users deviate from normal login behavior, such as time-of-day, workstation location and duration.

INFRASTRUCTURE

- [ ] As a CISO I want to log and control outbound access , so I can reduce the risk of malware and data exfiltration
- [ ] As a Security Architect I want to ensure that physically or logically segregated systems are used to isolate and run software that is required for business operations but incur higher risk for the organization.
- [ ] As a Security Architect I want to enforce network-based URL filters that limit a system's ability to connect to websites not approved by the organization.
- [ ] As a Security Architect I want to use DNS filtering services to  block access to known malicious domains.
- [ ] As a Security Architect I want to apply host-based firewalls or port filtering tools on end systems, with a default-deny rule that drops all traffic except those services and ports that are explicitly allowed.
- [ ] As a Security Architect I want to place application firewalls in front of any critical servers to verify and validate the traffic going to the server. Any unauthorized traffic should be blocked and logged.
- [ ] As a Security Architect I want to deny communications with known malicious or unused Internet IP addresses and limit access only to trusted and necessary IP address ranges at each of the organization's network boundaries,.
- [ ] As a Security Architect I want to deny communication over unauthorized TCP or UDP ports or application traffic to ensure that only authorized protocols are allowed to cross the network boundary in or out of the network at each of the organization's network boundaries.
- [ ] As a Security Architect I want to deploy network-based Intrusion Detection Systems (IDS) sensors to look for unusual attack Process and detect compromise of these systems at each of the organization's network boundaries.
- [ ] As a Security Architect I want to deploy network-based Intrusion Prevention Systems (IPS) to block malicious network traffic at each of the organization's network boundaries.
- [ ] As a Security Architect I want to ensure that all network traffic to or from the Internet passes through an authenticated application layer proxy that is configured to filter unauthorized connections.
- [ ] As a Security Architect I want to decrypt all encrypted network traffic at the boundary proxy prior to analyzing the content. However, the organization may use whitelists of allowed sites that can be accessed through the proxy without decrypting the traffic.
- [ ] As a Security Architect I want to segment the network based on the label or classification level of the information stored on the servers, locate all sensitive information on separated Virtual Local Area Networks (VLANs).
- [ ] As a Security Architect I want to enable firewall filtering between VLANs to ensure that only authorized systems are able to communicate with other systems necessary to fulfill their specific responsibilities.
- [ ] As a Security Architect I want  deploy web application firewalls (WAFs) that inspect all traffic flowing to the web application for common web application attacks so I can prevent attacks against my applications
- [ ] As a CISO, I want to track and control all of the components that transmit, store or process sensitive information so that I can identify and manage risks.
- [ ] As a Security Architect I want an automated asset inventory discovery tool that actively scans so that I can identify authorized and unauthorized devices connected to my network.
- [ ] As a Security Architect I want an automated asset inventory discovery tool that listens for new devices so that I can identify authorized and unauthorized devices connected to my network.
- [ ] As a Security Architect I want to ensure that resource inventory records the network address, ENI, resource name, data asset owner, and department for each resource so I can identify authorized and unauthoerized resources.
- [ ] As a CISO I want to Inventory and control of software assets so I can prevent, detect and remediate unauthorized software
- [ ] As a Security Architect I want to devise a list of authorized software and version that is required in the enterprise for each system type so I can establish a security baseline
- [ ] As a Security Architect I want to utilize software inventory tools throughout the organization so I can automate the documentation of all software on business systems. (track the name, version, publisher, and install date for all software, including operating systems authorized by the organization).
- [ ] As a Security Architect, I want to use automated tools to inventory all administrative accounts, including domain and local accounts so I can ensure that only authorized individuals have elevated privileges.
- [ ] As a Security Architect, I want to maintain documented, standard security configuration standards for all authorized operating systems and software So I can establish a baseline
- [ ] As a Security Architect, I want to maintain secure images or templates for all systems based on the organization's approved configuration standards so I can maintain consistency
- [ ] As a Security Architect, I want to deploy system configuration management tools that will automatically enforce and redeploy configuration settings to systems at regularly scheduled intervals.
- [ ] As a Security Architect I want to enable anti-exploitation features such as Data Execution Prevention (DEP) or Address Space Layout Randomization (ASLR) that are available in an operating system or deploy appropriate toolkits that can be configured to apply protection to a broader set of applications and executables.
- [ ] As a Security Architect I want to associate active ports, services and protocols to the hardware assets in the asset inventory.
- [ ] As a Security Architect I want to ensure that only network ports, protocols, and services listening on a system with validated business needs, are running on each system.
- [ ] As a Security Architect I want to maintain standard, documented security configuration standards for all authorized network devices.
- [ ] As a Security Architect I want all configuration rules that allow traffic to flow through network devices should be documented in a configuration management system with a specific business reason for each rule, a specific individual’s name responsible for that business need, and an expected duration of the need.
- [ ] As a Security Architect I want to compare all network device configuration against approved security configurations defined for each network device in use and alert when any deviations are discovered.
- [ ] As a Security Architect I want to maintain an up-to-date inventory of all of the organization's network boundaries.
- [ ] As a Security Architect I want to maintain an inventory of all sensitive information stored, processed, or transmitted by the organization's Technology systems, including those located onsite or at a remote service provider.
- [ ] As a Security Architect I want to applications that rely on a database, use standard hardening configuration templates. All systems that are part of critical business processes should also be tested.
- [ ] As a CISO I want to ensure that people throughout the organization have the skills and abilities needed to perform their duties so that security controls can be operated properly.
- [ ] As a CISO I want to perform a skills gap analysis so I can  understand the skills and behaviors of the workforce
- [ ] As a CISO I want to  deliver training to address the skills gap identified so I can positively impact workforce members' security behavior.
- [ ] As a CISO I want to  train the workforce on how to identify different forms of social engineering attacks, such as phishing, customer scams and impersonation calls.
- [ ] As a CISO I want to  train workforce on how to identify and properly store, transfer, archive and destroy sensitive information so I can prevent information disclosure
- [ ] As a CISO I want to  train workforce members to be aware of causes for unintentional data exposures so I can prevent data exposure
- [ ] As a CISO I want to  train employees to be able to identify the most common indicators of an incident so they can report such an incident.
- [ ] As a Security Architect I want to establish secure coding practices appropriate to the programming language and development environment being used.
- [ ] As a Security Architect I want to deploy application whitelisting that allows systems to run software only if it is included on the whitelist and prevents execution of all other software on the system So that I can minimize the risk of malware.
- [ ] As a Security Architect I want the application whitelisting software to ensure that only authorized software libraries (such as *.dll, *.ocx, *.so, etc) are allowed to load into a system process.
- [ ] As a Security Architect I want the  application whitelisting software only allows authorized digitally signed scripts (such as *.ps1, *.py, macros, etc) are allowed to run on a system.
- [ ] As a CISO, I want to identify and manage the known vulnerabilities so that I can prioritize efforts and reduce risks.
- [ ] As a Security Architect, I want to utilize an up-to-date SCAP-compliant vulnerability scanning tool to automatically scan all systems on a regular basis so I can identify all potential vulnerabilities on the organization's systems. Using a dedicated account for agent based on Ec2 and prioritize remediation using a score based system
- [ ] As a Security Architect, I want deploy automated software update tools so I can ensure that the operating systems are running the most recent security updates provided by the software vendor.
- [ ] As a Security Architect, I want deploy automated software update tools in order to ensure that third-party software on all systems is running the most recent security updates provided by the software vendor.
- [ ] As a CISO, I wan to track report and correct security configurations o resources so I can prevent attackers from exploiting vulnerable services
- [ ] As a Security Architect I want to subscribe to URL categorization services to ensure that they are up-to-date with the most recent website category definitions available.
- [ ] As a CISO, I want to identify previously unknown threats and weaknesses to the security controls so that I can reduce risk.
- [ ] As a Security Architect I want to utilize centrally managed anti-malware tool to continuously monitor and defend servers.
- [ ] As a Security Architect I want to perform automated port scans on a regular basis against all systems and alert if unauthorized ports are detected on a system.
- [ ] As a CISO, I want to identify and manage the known vulnerabilities so that I can prioritize efforts and reduce risks.
- [ ] As a Security Architect I want to install the latest stable version of any security-related updates on all network devices.
- [ ] As a Security Architect I want to perform regular scans from outside each trusted network boundary to detect any unauthorized connections which are accessible across the boundary.
- [ ] As a Security Architect I want to  ensure that explicit error checking is performed and documented for all input, including for size, data type, and acceptable ranges or formats.
- [ ] As a Security Architect I want to verify that the version of all software acquired from outside your organization is still supported by the developer or appropriately hardened based on developer security recommendations.
- [ ] As a Security Architect I want to ensure that all software development personnel receive training in writing secure code for their specific development environment and responsibilities. As a Security Architect I want to apply static and dynamic analysis tools to verify that secure coding practices are being adhered to for internally developed software.
- [ ] As a Security Architect I want to establish a process to accept and address reports of software vulnerabilities, including providing a means for external entities to contact your security group.
- [ ] As a CISO, I want to identify previously unknown threats and weaknesses to the security controls so that I can reduce risk.
- [ ] As a Security Architect I want to establish a program for penetration tests so I can identify vulnerabilities
- [ ] As a Security Architect I want to conduct regular external and internal penetration tests to identify vulnerabilities and attack vectors so I can reduce the attack surface
- [ ] As a Security Architect I want to perform periodic Red Team exercises to test organizational readiness so I can identify and stop attacks
- [ ] As a Security Architect I want to include tests for the presence of unprotected system information and artifacts that would be useful to attackers so I can reduce risk
- [ ] As a Security Architect I want to create a test bed that mimics a production environment so I can conduct tests without effecting production
- [ ] As a Threat Manager I want to use vulnerability scanning and penetration testing tools in concert. So I can focus the pen testing efforts
- [ ] As a CISO I want to ensure that Red Teams results are documented using open, machine-readable standards (e.g., SCAP) so I can compare results over time

INCIDENT RESPONSE

- [ ] As a Security Architect I want to ensure that unauthorized or noncompliant resources are removed from the network so I can update the network inventory
- [ ] As a Security Architect I want t ensure that unauthorized software is removed in a timely manner
- [ ] As a CISO, I want to develop and implement an incident response plan/methodology so that I can quickly detect, respond to and recover from a security incident.
- [ ] As a Security Architect I want to ensure that there are written incident response plans that define roles of personnel as well as phases of incident handling/management so that I can efficiently respond to an incident with confidence.
- [ ] As a Security Architect I want to assemble and maintain information on third-party contact information to be used to report a security incident so I can respond efficiently
- [ ] As a Security Architect I want to publish information for all workforce members, regarding reporting computer anomalies and incidents to the incident handling team.
- [ ] As a Security Architect I want to plan and conduct routine incident response exercises and scenarios for the workforce so that we can respond with confidence and efficiency
- [ ] As a Security Architect I want to create incident scoring and prioritization schema so I can prioritize and prepare for response
