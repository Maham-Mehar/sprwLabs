export interface BlogData {
    id: number;
    image: string;
    Heading: string;
    text1?: string;
    text2: string;


}
export const BlogsData: BlogData[] = [
    {
        id: 1,
        image: "/images/image7.png",
        text1: "security automation, incident response, threat intelligence",
        Heading: "Let SOAR Prioritize Your Incident",
        text2: "Managing Incident Severity in a SOC: Leveraging SOAR for Automation In a Security Operations Center (SOC), managing incident severity is critical for ensuring the security of an organization’s digital infrastructure. Incident severity directly impacts the prioritization of resources, team actions, and response times. As threats evolve in...",

    },
    {
        id: 2,
        image: "/images/image8.png",
        Heading: "SOAR Use Case: Data Loss Prevention",
        text2: "Data loss prevention is a critical aspect of any organization's Intellectual Property security strategy. It involves identifying, monitoring, and protecting sensitive data from unauthorized access, leakage, or theft. Utilizing security orchestration, automation, and response platforms, you can create a robust framework for monitoring Data Loss...",

    },
    {

        id: 3,
        image: "/images/image9.png",
        Heading: "Validate Browser Extensions with SOAR",
        text2: "Browser extensions are powerful tools that enhance the functionality of web browsers. Many potential threat actors leverage browser extensions as a way to track and monitor user’s activity. Browsers such as Island have started to tackle this space and give enterprises more control over the browser. Similar to many other use cases, SOAR can be...",
    },
    {
        id: 4,
        image: "/images/image10.png",
        Heading: "Real World Use Case: Retail Theft Prevention",
        text2: "Consistently our partnerships with our clients lead to some of the most interesting use cases.  Recently we partnered with a retailer who has a large online presence to help detect and mitigate fraudulent transactions. The first step to establishing a use case is understanding the data sources.  In this case, the retailer received logs of every...",
    },
    {
        id: 5,
        image: "/images/image11.png",
        text1: "soar, security automation, incident response, headless",
        Heading: "Headless Automation",
        text2: "While our favorite holiday is Halloween, this article sadly has nothing to do with the Headless Horsemen.  Instead we will focus on how we stop security teams from being scared and overwhelmed. Security teams are constantly challenged to do more with less.  When a security team acquires a SOAR, they do not always have a staffing plan associated...",
    },
    {
        id: 6,
        image: "/images/image12.png",
        text1: "soar, security automation, crowdstrike, edr, unwanted software",
        Heading: "Use Case: Removing Unwanted Software",
        text2: "You've taken away administrative privileges on employees desktops but users still maintain various unwanted programs.  You can easily pull a list of these programs however how do you go about removing them?  In this case we'll look at how you automate software removal. For the purpose of this article we will focus on Crowdstrike however most...",
    },
    {
        id: 7,
        image: "/images/image13.png",
        text1: "soar, security automation, hiring",
        Heading: "SOAR Security Analyst Interview Questions",
        text2: "Security Automation Orchestration and Response (SOAR) has a unique set of analyst requirements such as software development, general security security tooling knowledge and API experience.  These requirements are difficult to find and staff.  Simply put, they're the reason we exist.  However, many organizations prefer to build the team out...",
    },
    {
        id: 8,
        image: "/images/image14.png",
        text1: "soar, security automation, incident response",
        Heading: "Staffing & Operationalizing SOAR",
        text2: "Congratulations! You've just taken a big step forward and are now the proud owner of a SOAR. This blog post will help you evaluate, design, and scope your SOAR project to ensure that you have the right team and resources in place to make it successful. While this post won't cover the specifics of how to design a successful SOAR, it'll provide a...",
    },
    {
        id: 9,
        image: "/images/image15.png",
        text1: "soar, security automation, incident response",
        Heading: "Building Blocks",
        text2: "Utopia.  That's where every SOAR conversation starts.  Sadly, that's not day 1 of a SOAR deployment. Security operations is compromised of a plethora of tools and processes.   Building a security automation requires understanding of how your security operations center functions.  There are no fully built out playbooks.  When we start out creating...",
    },
    {
        id: 10,
        image: "/images/image16.png",
        Heading: "The SOAR RFP",
        text2: "Have you been looking at SOAR? Did you create an RFP? Did every vendor say respond yes to every question? For a consumer, this is the most difficult step of purchasing a SOAR tool. Since you can write arbitrary code, any task may be accomplished via the SOAR tool. As a result, the answer to every question is “Yes.” The problem is should do...",
    },    {
        id: 11,
        image: "/images/image17.png",
        text1: "soar, security automation",
        Heading: "Is My Organization Ready for SOAR?",
        text2: "Gartner has spent the last 5 years touting the benefits of automation and they’re right! Automation has the potential to revolutionize how a security organization operates. They have however completely disregarded how to consume automation. Bringing automation into an organization doesn’t start with a tool, technology, or person. It starts with a...",
    },
]