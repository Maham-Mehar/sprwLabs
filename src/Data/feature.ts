// import { IconType } from "react-icons"

export interface featuresData{
    id: number;
    titleText?: string;
    titleHeading?:string;
    image?: string;
    Heading?: string;
    text?:string;
    

}
export const featureData:featuresData[] =[
{
    id: 0,
    titleText:"Essentials features",
    titleHeading:"All the things: Automated",
},
{
    id:1,
    image: "/images/icon1.png",
    Heading:"Security Automation Orchestration & Response",
    text:"Tried to implement a SOAR solution and discovered it takes becoming a developer, security expert and analyst all in one?  We did too.  Let us bring all three of those roles to the table to help you.",

},
{
    id:2,
    image: "/images/icon2.png",
    Heading:"Managed Services",
    text:"Having a team of developers, SOAR Engineers, and API architects isn't your business; it's ours.  Let us design, build and run your process so you have more time to focus on how you can better secure your business.",

},
{
  
    id:3,
    image: "/images/icon3.png",
    Heading:"Professional Services",
    text:"Spending too much time copying and pasting from one spreadsheet to another?  Monthly reporting taking too much time?  Spending time taking data from one Excel sheet to another?  No problem, let us help you!",
},
{
    id:4,
    image: "/images/icon4.png", 
    Heading:"Outcome Driven Automation",
    text:"Not looking to expand your team but need a few simple processes automated?  Let's talk about outcome driven automation.  Sprwlabs will document and implement your process.",
}

]