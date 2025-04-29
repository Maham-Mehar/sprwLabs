export interface pro_Info {
    id: number;
    titleText?: string;
    titleHeading?: string;
    image?: string;
    Heading?: string;
    explanation?: {
        data: string;
    }[];


}
export const Info_Data: pro_Info[] = [
    {
        id: 0,
        titleText: "Developers, Engineers, and Architects",
        titleHeading: "Professional Services",
    },
    {
        id: 1,
        Heading: "Let's Build Something Together",
        explanation: [{ data: "SprwLabs brings a team of developers, engineers and architects to deliver a successful outcome.  Complex problems require multiple resources.  SprwLabs brings each of these to assist with your deployment and develop the custom automation solution to meet your needs." },
        { data: "Reach out and let's discuss what we've built in the past and how we can help you build the future." },

        ],
    },
    {
        id: 2,
        image: "/images/image23.png",

    },

]