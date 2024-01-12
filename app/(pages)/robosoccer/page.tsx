import React from "react";

export default function RoboSoccer() {
  return (
    <div className="flex flex-col p-4 sm:p-10 bg-zinc-900 h-screen sm:h-full">
      <video
        autoPlay
        muted
        loop
        className="rounded-md"
        src={
          "https://res.cloudinary.com/dhdyc3u1n/video/upload/v1703759299/sc_ksexz6.mp4"
        }
      />
      <h1 className="mb-6 sm:mb-3 mt-3 font-extrabold text-white font-mono md:text-4xl sm:text-3xl">
        Robo Soccer Rules:
      </h1>
      <div className="m-3">
        <h3 className="  underline underline-offset-4 mb-3 text-white sm:text-2xl font-mono md:text-2xl  ">
          Bot Specifications
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">
            Bots can be Wireless (Bluetooth controlled or RC, etc.) or wired.
          </li>
          <li className="mb-2">Bot weight: 5kg</li>
          <li className="mb-2">
            Length of the bot: 30cm + 3cm tolerance (inclusive of clamps)
          </li>
          <li className="mb-2">Width of the bot: 30cm + 3cm tolerance</li>
          <li className="mb-2">Height of the bot: 30cm</li>
          <li className="mb-2">Operating voltage: 12V</li>
          <li className="mb-2">
            Clamp width must be a minimum of 15 cm, with a minimum depth of
            about 6 cm. Clamp should be stationary, without any moving parts,
            and can be of any shape with an angle of not less than 90 degrees.
          </li>
        </ul>
        <h3 className=" mt-3 underline underline-offset-4 mb-3 text-white font-mono md:text-2xl sm:text-2xl  ">
          Regulations
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">
            Each team will have one bot and can comprise a maximum of 4 members
          </li>
          <li className="mb-2">
            In case the bot breaks, a maximum of 10 minutes will be given for
            repairs. Failing to repair the bot within the time limit will lead
            to disqualification.{" "}
          </li>
          <li className="mb-2">
            For students making wired bots, they must bring their own extension
            boards.{" "}
          </li>
          <li className="mb-2">
            Students making wireless bots should bring their own batteries, etc.{" "}
          </li>
          <li className="mb-2">
            No weapons allowed (like external gears, cutters, etc.).
          </li>
          <li className="mb-2">
            No carrying or lifting the ball using arms or any other means.
          </li>
          <li className="mb-2">
            No shielding or covering the ball in any way.
          </li>
          <li className="mb-2">
            No purposeful ramming. Yellow card for ramming once or twice;
            disqualification for ramming the third time. Play fair.
          </li>
          <li className="mb-2">
            Please shield the tires to avoid the ball getting stuck in them.
          </li>
          <li className="mb-2"></li>The competition shall be held in Knockout or
          double elimination, which will be decided at the venue.
          <li className="mb-2">
            In case of a tie, there will be an extended match with a time limit
            of 2 minutes add-on. The team that scores first wins.
          </li>
          <li className="mb-2">
            If there is still a draw, coordinators will place each team's bot
            and ball in different locations on the arena. Teams must figure out
            a way to score a goal. The bot can only touch the ball once.
          </li>
        </ul>
        <h3 className=" mt-3 underline underline-offset-4 mb-3 text-white font-mono md:text-2xl sm:text-2xl  ">
          Arena
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">
            The total size would be 12 x 9 feet. The playing area would be 10 x
            8 feet appx with ±1 ft tolerance.
          </li>
          <li className="mb-2">
            {" "}
            The floor consists of a green carpet on a hard surface. All lines on
            the field will be painted white and will have a thickness of 50 mm.
          </li>
          <li className="mb-2">
            The field has two goalposts with the dimension of 35-40 cm, height
            20 cm and 30cm depth to score the goal.{" "}
          </li>
          <li className="mb-2">
            In front of each goal there will be a 100 cm wide and 40 cm long
            penalty area. The robo is considered to be in penalty area if it is
            completely inside the penalty{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
