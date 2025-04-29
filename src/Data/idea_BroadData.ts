// import { IconType } from "react-icons"

export interface idea_BasedData {
    id: number;
    image: string;
    Heading: string;
    text?: string;
    text1?: string;
    text2?: {
        data: string;
    }[];

}
export const Idea_BasedData: idea_BasedData[] = [
    {
        id: 1,
        image: "/images/icon1.png",
        Heading: "Web Application Firewall",
        text: "One of the most under leveraged tools in a security team's tech stack is the web application firewall (WAF).  WAF alerts are commonly too frequent or too noisy.  This is where automation can come in and provide aggregation of alerts, ability to deduplicate and view specific alerts and more.Let's explore use cases with your web application firewall.",

    },
    {
        id: 2,
        image: "/images/icon2.png",
        Heading: "Phishing Triage",
        text: "For roughly the past decade, the every major breach report including Verizon, NCC, WithSecure, F5, CheckPoint or any other major vendor - the most common attack vector is still phishing.  Many organizations have tried unsuccessfully to automate their phishing response.  Our approach is different - we focus on the analyst first.  How do we enable the analyst as opposed to automating the process.",

    },
    {

        id: 3,
        image: "/images/icon3.png",
        Heading: "Endpoint Management",
        text: "Your email inbox is nearly as clogged with new vendors as it is with alerting emails.  How does your organization prioritize alerts?  How do you incorporate threat intelligence into your investigation?  Do external emails to your security team automatically create tickets?  Let's explore how we can help your inbox turn into actionable items.",
    },
    {
        id: 4,
        image: "/images/icon4.png",
        Heading: "SIEM Log Investigation",
        text: "Your email inbox is nearly as clogged with  new vendors as it is with alerting emails.  How does your organization prioritize alerts?  How do you incorporate threat intelligence into your investigation?  Do external emails to your security team automatically create tickets?  Let's explore how we can help your inbox turn into actionable items.",
    },
    {

        id: 5,
        image: "/images/icon3.png",
        Heading: "Firewall Rule Management",
        text: "Every organization has had their firewall block production traffic.  Let's add additional, automated controls.  For example, querying the SIEM to look for any existing traffic that would be blocked by the rule prior to implementing.  This reduces the fat finger risk by verifying you did not just block a production server.  Additionally, we can perform a reverse DNS lookup to see what server is behind an IP or DNS name.  Once complete, lookup the server owner in the CMDB and ask them to confirm the change.",
    },
    {
        id: 6,
        image: "/images/icon4.png",
        Heading: "Change Management Approvals",
        text: "Archer, ServiceNow, Zoho, Remedy, and nearly 50 other tools can be used for change management but most fail to incorporate other information into a request.  Instead of your analyst having to look up the environment, machine, IP, or other information, let's enable them to open the ticket and visually see all of that information.",
    },
    {
        id: 7,
        image: "/images/icon3.png",
        Heading: "Common Helpdesks Use Cases",
        text: "When a user calls in to the help desk, there's a decent chance they're requesting new software, resetting a password, or need remote assistance.  Once the user calls in, let's prepopulate all of those items to simplify the help desk analysts job.  Let's make password resets one click.  IT Equipment setups, one click.  Reach out and let's discuss how we can make this a reality for your team.",
    },
    {
        id: 8,
        image: "/images/icon4.png",
        Heading: "Data Exfiltration",
        text: `Every day your DLP tool generates a new record for "Unknown File Access" or "Unknown Data Exfiltration" type alerts.  Regardless of the number of analysts hired, there is no possible way to triage the alerts.  Let's look at how we can bring automation in to determine if that IP has had a successful login, has it been used previously to access files, does it have any malicious history and more.  Then let's close or escalate the alert.  Reach out and let's explore how to bring this process into your environment.`,
    },
    {
        id: 9,
        image: "/images/icon3.png",
        Heading: "Threat Intelligence Platform",
        text2: [{ data: "Are you a member of an ISAC with no way to consume their data?" },
        { data: "Are you using MISP and lacking in enrichment or automation capability?" },
        { data: "Are you using another TIP and not seeing the 100k worth of value from it?" },
        ],
        text1: "Let's discuss how we can leverage SOAR to reduce, mitigate, or empower your TIP spend.  Indicators will no longer only be ingested; they will be enriched, actioned and leveraged in your daily security operations.",
    },
]