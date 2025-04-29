export interface about_Data {
    id: number;
    Heading: string;
    text: string;
    text2: string;
    explanation: {
        data: string;
    }[];

}
export const About_Data: about_Data[] = [


    {
        id: 1,
        text: "Consumable Automation",
        Heading: "Let's Work Together",
        explanation: [{ data: "SprwLabs exists out of a desire to focus on solving problems.  We are a collection of professionals who were frustrated by the continual spend on buying other tools to get one feature, one report, or one visualization.  Collectively, we felt we can improve security operations by improving the implementation and enablement of tools." },
        { data: "A tool cannot exist in isolation.  It must talk to your ticketing system, your endpoint, your SIEM, your DLP, your proxy and anything else you have." },
        { data: "Together we focus on how to pull together the data you already have without increasing the tools you need to manage." },
        { data: "Let's connect and discuss how you can improve the return on your investment." },
        ],
        text2: "Greg Bammel",

    },
]