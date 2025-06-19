import Lane_Detection from "../assets/images/Lane_Detection.png";
import Mango_Disease from "../assets/images/Mango_Disease_Detection.png";
import Suicidality_paper from "../assets/images/Suicide.png";
import { LANE_DETECTION_PAPER_LINK, MANGO_DISEASE_PAPER_LINK, RESEARCH_GATE_PROFILE_LINK, SUICIDE_PAPER_LINK } from "./Constant";

const paperDetils = [
{
    title: "A Deep Learning Based Smartphone Application for Detecting Mango Diseases and Pesticide Suggestions",
    duration: "May 2023",
    image: Mango_Disease,
    description:
    `This paper has proposed a new machine learning to classify diseases, insects, and their solutions. It includes a sufficient number of mango tree plants, insects, and diseases datasets with pesticide suggestions.`,
    tags: ["Publisher: IJCDS"],
    category: "",
    code: RESEARCH_GATE_PROFILE_LINK,
    live: MANGO_DISEASE_PAPER_LINK,
    link: "See Live",
    link2: "See Profile"
},

{
    title: "Identifying the Signature of Suicidality : A Machine Learning Approach",
    duration: "June 2022",
    image: Suicidality_paper,
    description:
    `This research proposes a machine learning-based prediction model in this respect. This research uses four traditional machine learning techniques to look at suicidality in various groups of people. To achieve higher levels of accuracy, we have included feature engineering in our suggested model.`,
    tags: ["Publisher: EUDL (European Union Digital Library)"],
    category: "",
    code: RESEARCH_GATE_PROFILE_LINK,
    live: SUICIDE_PAPER_LINK,
    link: "See Live",
    link2: "See Profile"
},


{
    title: "Lane Detection for Autonomous Vehicle Management: PHT Approach",
    duration: "December 2021",
    image: Lane_Detection,
    description:
    `This research paperpresents the design of a prototype autonomous guided vehiclewhich will detect and follow the lanes using the ProbabilisticHough Transform (PHT) algorithm. To do so, we convert ourRGB road images into an HSV color model and then applyGaussian smoothing to the converted grayscale image. Fordetection purposes, we process our region of interest (ROI)using a polygon clipping algorithm. Then, we apply ProbabilisticHough Transform upon the ROI image while setting all theparameters in our proposed lane detection algorithm.`,
    tags: ["Publisher: IEEE"],
    category: "",
    code: RESEARCH_GATE_PROFILE_LINK,
    live: LANE_DETECTION_PAPER_LINK,
    link: "See Live",
    link2: "See Profile"
},

];

export default paperDetils;