import { IconType } from "react-icons";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { HiOutlineCheckCircle } from "react-icons/hi2";

export interface managedCard {
    id: number;
    Heading: string;
    text: string;
    icon: IconType; 
}

export const ManagedCard: managedCard[] = [
    {
        id: 1,
        icon: IoIosCheckmarkCircleOutline ,
        Heading: "Monitor",
        text: "SprwLabs 24/7 monitoring continuously receives notifications from your automated solution. In the event a process starts to fail, a SprwLabs engineer will review the alert and triage accordingly.",
      },
    {
        id: 2,
        icon: IoIosCheckmarkCircleOutline,
        Heading: "Manage",
        text: "I'm a text box. Double click me to edit the text or to change the way I look. You can change the font, size, color, and so much more.",

    },
    {
        id: 3,
        icon: IoIosCheckmarkCircleOutline,
        Heading: "Evolve",
        text: "As your organization's needs change, your automation must evolve as well.  When new tools are integrated into the environment, SprwLabs reviews how they can be incorporated",

    },
]