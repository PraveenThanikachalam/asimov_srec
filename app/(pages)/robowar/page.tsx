export default function RoboWar() {
  return (
    <div className="flex flex-col p-4 sm:p-10 bg-zinc-900 h-screen sm:h-full">
      <video
        autoPlay
        muted
        loop
        className="rounded-md"
        src={
          "https://res.cloudinary.com/dhdyc3u1n/video/upload/v1703759299/robowar_pc3iii.mp4"
        }
      />
      <h1 className="mb-6 sm:mb-3 mt-3 font-extrabold text-white font-mono md:text-4xl sm:text-3xl">
        Robo War Rules:
      </h1>
      <div className="m-3">
        <h3 className="  underline underline-offset-4 mb-3 text-white sm:text-2xl font-mono md:text-2xl  ">
          Essential Information
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">Team: Max 4 members.</li>
          <li className="mb-2">Arena size: 15ft x 15ft.</li>
          <li className="mb-2">Max weight: 15kgs</li>
          <li className="mb-2">Tolerance: 500g.</li>
          <li className="mb-2">
            Overall dimensions of bot: 60cm x 60cm x 60cm (W x B x H).
          </li>
          <li className="mb-2">
            Power Supply: On-site 230V AC, teams bring their adapters. Max
            battery voltage: 36V DC.
          </li>
          <li className="mb-2">
            Timeouts: Two 2-minute timeouts in a war round.
          </li>
          <li className="mb-2">
            Internal combustion engines, pneumatics and hydraulics are not
            allowed.
          </li>
          <li>The bot should be wireless, a wired bot is prohibited.</li>
        </ul>
        <h3 className=" mt-3 underline underline-offset-4 mb-3 text-white font-mono md:text-2xl sm:text-2xl  ">
          Judging Criteria
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">Victory: Opponent immobilized. </li>
          <li className="mb-2">
            Immobility: No linear motion of at least one inch in 30 seconds.{" "}
          </li>
          <li className="mb-2">
            Safety Violation: Judges disqualify an unsafe robot.{" "}
          </li>
          <li className="mb-2">
            Arena Exit: Opponent inside the arena wins if thrown out.{" "}
          </li>
          <li className="mb-2">
            Points for aggression, damage, control, and strategy.
          </li>
        </ul>
        <h3 className=" mt-3 underline underline-offset-4 mb-3 text-white font-mono md:text-2xl sm:text-2xl  ">
          Weapons
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">At least one functioning weapon required.</li>
          <li className="mb-2">Bring extra weapons or spares. </li>
          <li className="mb-2">
            Loss if entering the arena without a working weapon.{" "}
          </li>
        </ul>
        <h3 className=" mt-3 underline underline-offset-4 mb-3 text-white font-mono md:text-2xl sm:text-2xl  ">
          Electrical System
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">Max voltage for weapon and motion: 36V. </li>
          <li className="mb-2">
            Batteries: Commercially available; lead-acid must be AGM-type.{" "}
          </li>
          <li className="mb-2">
            Batteries: Accessible for removal after each match{" "}
          </li>
        </ul>
        <h3 className=" mt-3 underline underline-offset-4 mb-3 text-white font-mono md:text-2xl sm:text-2xl  ">
          Construction Material
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">
            Prohibited materials: Radioactive, hazardous fibres, toxic/reactive
            metals, organic substances (except wood), polyurethane foam.{" "}
          </li>
          <li className="mb-2">
            Exterior: Solid rubber or plastic allowed; no lead metal, rigid
            plastic foams, foam rubber, glass, or brittle{" "}
          </li>
        </ul>
        <h3 className=" mt-3 underline underline-offset-4 mb-3 text-white font-mono md:text-2xl sm:text-2xl  ">
          Weapon Specifications
        </h3>
        <ul className="list-disc font-semibold text-white font-mono text-lg sm:text-1xl pl-5">
          <li className="mb-2">
            Flames: Pure propane/butane, max 480ml, adjustable 4-foot flame.{" "}
          </li>
          <li className="mb-2">
            Multiple Weapons: Allowed; bot weight must not exceed specified
            limit.{" "}
          </li>
          <li className="mb-2">
            Spinning Weapons: Fail-safe required; parts max 5kg.{" "}
          </li>
          <li className="mb-2">
            Lifter/Flipper Weapons: Must demonstrate lifting capacity.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
