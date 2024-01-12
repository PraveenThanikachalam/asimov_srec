"use client";

import Cards from "../components/Cards";

export default async function Events() {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">

    <div className="pt-10 sm:h-full md:h-auto md:mt-28 w-auto grid sm:grid-cols-1 md:grid-cols-4 overflow-auto">
      <Cards
        title={"Robo War"}
        overview={
          "RoboWar, inspired by the popular TV show Robot Wars, is a combat robotics competition. Teams construct remote-controlled robots equipped with weapons to battle against each other in an arena. The goal is to disable or immobilize the opponent's robot."
        }
        url={
          "https://res.cloudinary.com/dhdyc3u1n/image/upload/v1703761177/Robots-a_d_tobi81.jpg"
        }
        redirect={"/robowar"}
      />
      <Cards
        title={"Robo Soccer"}
        overview={
          "RoboSoccer, also known as Robot Soccer or RoboCup Soccer, involves autonomous or remote-controlled robots playing a soccer match. The objective is to score goals against the opposing team while navigating the soccer field."
        }
        url={
          "https://res.cloudinary.com/dhdyc3u1n/image/upload/v1703761114/IMG_0748_w1lers.jpg"
        }
        redirect={"/robosoccer"}
      />
      <Cards
        title={"Line Follower"}
        overview={
          "Line Follower is a robotics competition where autonomous robots navigate a predefined path marked by a line on the floor. The objective is for the robot to follow the path accurately and quickly, often encountering twists, turns, and intersections."
        }
        url={
          "https://res.cloudinary.com/dhdyc3u1n/image/upload/v1703760776/WhatsApp_Image_2023-12-27_at_11.43.23_2bab3185_omupkv.jpg"
        }
        redirect={
          "https://lh4.googleusercontent.com/Fv8al4TKUg1rDlbzO2xKlPOBUaxXAgc9VjO07bL_WL3Z7JckMSIhk38Km4HXAIg5_Fcpsmui2SUeNO40_i10fQAMF9NU7F1oIK1CRpIAf08gk62nx1yjIzAiRcH3pw3uzQ=w1587"
        }
      />
      <Cards
        title={"Line Follower (Juniors)"}
        overview={
          "Line Follower is a robotics competition where autonomous robots navigate a predefined path marked by a line on the floor. The objective is for the robot to follow the path accurately and quickly, often encountering twists, turns, and intersections."
        }
        url={
          "https://res.cloudinary.com/dhdyc3u1n/image/upload/v1703760776/WhatsApp_Image_2023-12-27_at_11.43.23_2bab3185_omupkv.jpg"
        }
        redirect={
          "https://lh3.googleusercontent.com/ajBo1QpCNf4fETm9Plugbs3b_elRqWiUoWYGJB3nTrYK1tEFhn5pTwf8my8ipZQ-THRovl6rrAJxEljjXFlIsIr9uD_ZL-2quYxkEQRt1Reh_5JvgRu-kIQTS4Rdq_6PIA=w1587"
        }
      />
      <Cards
        title={"Drone Race"}
        overview={
          " Drone racing competitions involve racing small, agile unmanned aerial vehicles (UAVs) or drones through a predefined course marked by obstacles and checkpoints."
        }
        url={
          "https://res.cloudinary.com/dhdyc3u1n/image/upload/v1703761251/drone_p13abh.png"
        }
        redirect={
          "https://lh4.googleusercontent.com/BPlGJ8TAFFtTLu1Ph8X8Lh-yEALCmk6nJZpguJ3fu2ZY7b97e8DJ_OmSHSeHNUyOxf7XAnNAT6dLQpbiHfg06q-CdaDKGPsc9KzKDOMcz4g9zOzCIfcO6B8YJVwiyYv1_w=w1587"
        }
      />
      <Cards
        title={"Project Expo"}
        overview={
          "A Project Expo, also known as a Project Exhibition or Science Fair, is an event where individuals or groups showcase their projects, research, and innovations to a broader audience."
        }
        url={
          "https://res.cloudinary.com/dhdyc3u1n/image/upload/v1703761284/pngwing.com_3_yy5uus.png"
        }
        redirect={
          "https://lh6.googleusercontent.com/OlhoOu7ig8kG0f2S8o8xyFOn7osg8brkUKgpHeQUwP04wZ4T3Md5eb_0pI8ljZriI-HiwV3a9dMxTdEGeiS3gNy223gmS3FxP9sJeWpECsMdX5wOlDWFH9B4I3qX9CCytQ=w1587"
        }
      />
      <Cards
        title={"Project Expo (Juniors)"}
        overview={
          "A Project Expo, also known as a Project Exhibition or Science Fair, is an event where individuals or groups showcase their projects, research, and innovations to a broader audience."
        }
        url={
          "https://res.cloudinary.com/dhdyc3u1n/image/upload/v1703761284/pngwing.com_3_yy5uus.png"
        }
        redirect={
          "https://lh4.googleusercontent.com/8VpZjVT7Ms1kOS5316dMfSevIC2-sSh9ovRMCXNuwDFprWuwAqIvok_HWGlwvN0tR1Yu1vU9E9IWSqcNZ8yZXojIWqLQ-3KcOTXUZUXqfsC3mmofPDWBOKFU4j2HizE0hQ=w1587"
        }
      />
      <Cards
        title={"Robo Quiz"}
        overview={
          "RoboQuiz is a competition that combines robotics knowledge and quiz-style questions. Participants are tested on their understanding of robotics concepts, principles, and developments."
        }
        url={""}
        redirect={
          "https://lh3.googleusercontent.com/dzsn0XUFdFlpPH-PeSQEDHIgYRi4ggsy9VrfZKlIKZuB0QX8cvUxU33wdzrE7jWrj2UbkNwPOa1AtbC_MZz15zC9FjiEN7cLhT_MEEx3UbHtebB_EgR_cYQ7mYEsQaw5yg=w1587"
        }
      />
    </div>
  );
}
