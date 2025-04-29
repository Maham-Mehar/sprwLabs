export interface pro_Card {
    id: number;
    titleText?: string;
    titleHeading?: string;
    image?: string;
    Heading?: string;
    explanation?: {
        head:string;
        data: string;
    }[];


}
export const proCard_Data: pro_Card[] = [
  
    {
        id: 1,
        image:"/images/image24.png",
        Heading: "Time to Value Matters",

    },
    {
        id: 2,
        explanation: [{head:"Objective Based Deployment", data: "Our experience deploying SOAR across multiple clients enables us to articulate accurate timelines with objective, measurable milestones.  We aren't a large reseller who has a high level project plan - we are dedicated to automation projects and we know how to deliver.." },
            {head:"The Right Resources", data: "SOAR requires a developer, security engineer, project manager and an architect.  Each person plays a different role in the deployment however it's difficult for most security teams to staff every role.  Our team brings all the necessary skillsets to the table to deliver a successful outcome." },
            {head:"Planning is the Key", data: "Far too many SOAR deployments begin without an end state.  Will SOAR be your case management tool?  What playbooks will stand alone?  What technologies does security control access to vs when do we need to engage other teams?  SprwLabs will help guide you through the hurdles of a SOAR deployment." },

        ],
    },

]