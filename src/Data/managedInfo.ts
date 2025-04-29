export interface info_Data {
    id: number;
    image: string;
    Heading: string;
    text: string;
    explanation: {
        data: string;
    }[];

}
export const Info_Data: info_Data[] = [


{
    id: 1,
    image: "/images/image22.png",
    text:"Consumable Automation",
    Heading: "Automation Managed Services",
    explanation: [{ data: "Gartner has written continuously about how organizations can leverage automation however they haven't discussed how you consume it. Instead of hiring a security developer in addition to an analyst and architect to orchestrate your SOAR, let SprwLabs manage the entire process." },
    { data: "SprwLabs managed services clients meet with our team to discuss their use case, goals, roadmap and how automation can help.  There are a plethora of use cases such as incorporating threat intelligence, basic alert triage and investigation, firewall request approvals, user off boarding and more.  SprwLab's team will break these down into easily consumable steps we develop for your team." },
    { data: "Once in place, automation isn't set it and forget it.  Tools are upgraded, reconfigured, redeployed, or replaced.  An automation solution requires continuous monitoring to work smoothly.  Analysts may require additional contextual information or find they need to add a step to a process.  All of these situations are handled seamlessly by SprwLabs managed services." },
    ],
  
},
]