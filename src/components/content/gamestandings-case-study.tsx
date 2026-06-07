"use client";

import {
  Users,
  Users2,
  CalendarDays,
  Trophy,
  Gamepad2,
  BadgeCheck,
  Swords,
  Dice5,
  Compass,
  Map,
  BookOpen,
  ScrollText,
  Medal,
  TrendingUp,
  ChartLine,
  Waypoints,
  ClipboardList,
  History,    
  UserMinus,
  TimerOff,
  LucideUsers,
  LucideUsersRound, 
  LucideArrowUpDown,
  LucideUserStar,
  Funnel,
  LucideCircleCheckBig

} from "lucide-react";

export default function GameStandingsCaseStudy() {
  const journey = [
    "Manual Trackindg",
    "Score Disputes", 
    "No Rankings",
    "Low Engagement",
  ];

  const research = [
    
    {
      icon: Dice5,
      value: "150,000+",
      label: "Casual BoardGamers",
    },
    {
      icon: Trophy,
      value: "15,000+",
      label: "Core BoardGamers",
    },
    {
      icon: Users2,
      value: "100+",
      label: "Active Boardgaming Communities(approx)",
    },
    {
      icon: CalendarDays,
      value: "10+",
      label: "Avg Event per Community per Month",
    },
  ];

  const offerings = [
  {
    icon: Trophy,
    label: "Real-time Leaderboard",
  },
  {
    icon: BadgeCheck,
    label: "Rank Approvals",
  },
  {
    icon: Swords,
    label: "Match Creation",
  },
  {
    icon: Gamepad2,
    label: "Game Selection",
  },
];

  const statistics = [
    {
      icon: Users,
      value: "10+",
      label: "Users onboarded for product validation",
    }, 
  ];
  const northStarMetric = [
  {
    icon: LucideCircleCheckBig,
    label: "Number of Approved Matches per Month",
  }
];

const successMetrics = [
  {
    icon: LucideUsersRound,
    label: "Monthly Active Users",
  },
  {
    icon: Swords,
    label: "Matches per User per Month",
  },
  {
    icon: Funnel,
    label: "% Matches Approved",
  },
];

const counterMetrics = [
  {
    icon: LucideUserStar,
    label: "Number of Unique Players",
  },
  {
    icon: LucideArrowUpDown,
    label: "Leaderboard Position Changes",
  },
];

  return (
    <div className="space-y-6">
      {/* =======================
          Row 1
      ======================== */}
      <div
        className="
          grid
          gap-6

          xl:grid-cols-[2fr_1fr]
        "
      >
        {/* Problem Space */}
        <section
          className="
            rounded-[24px]

            border
            border-border

            bg-card

            p-6
          "
        >
          <h3
            className="
              font-semibold

              text-foreground
            "
          >
            Problem Space
          </h3>

          <div
            className="
              mt-12

              grid
              gap-5

              lg:grid-cols-[2fr_1fr]
            "
          >
            {/* Journey */}
            <div
              className="
                hidden
                md:grid

                grid-cols-4

                gap-x-4

                items-start
              "
            >
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div
                  className="
                    h-14
                    w-14

                    rounded-full
                    flex items-center justify-center
                    border
                    border-violet-500
                    
                    hover:-translate-y-1
                  "
                >
                  <Map className="size-6 text-violet-400" />
                
                </div>
                <span
                  className="
                    mt-3
                    text-center

                    text-xs

                    text-muted
                  "
                >
                  Explores a variety of board games through events.
                </span>
              </div>

              {/* Step 2 */}
              <div
                className="
                  flex
                  flex-col
                  items-center

                  mt-18
                "
              >
                <div
                  className="
                    h-14
                    w-14

                    rounded-full
                    flex items-center justify-center
                    border
                    border-violet-500
                    
                    hover:-translate-y-1
                  "
                >
                  <Waypoints className="size-6 text-violet-400" />
                    
                </div>

                <span
                  className="
                    mt-3

                    text-center

                    text-xs

                    text-muted
                  "
                >
                  Enjoys playing but loses track of past sessions.
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div
                  className="
                    h-14
                    w-14

                    rounded-full
                    flex items-center justify-center

                    border
                    border-violet-500
                    
                    hover:-translate-y-1
                  "
                >
                  <ClipboardList className="size-6 text-violet-400" />
                </div>

                <span
                  className="
                    mt-3

                    text-center

                    text-xs

                    text-muted
                  "
                >
                  Has no record of performance or achievements.
                </span>
              </div>

              {/* Step 4 */}
              <div
                className="
                  flex
                  flex-col
                  items-center

                  mt-18
                "
              >
                <div
                  className="
                    h-14
                    w-14

                    rounded-full
                    flex items-center justify-center
                    

                    border
                    border-violet-500
                    
                    hover:-translate-y-1
                  "
                >
                  <ChartLine className="size-6 text-violet-400" />
                </div>


                <span
                  className="
                    mt-3

                    text-center

                    text-xs

                    text-muted
                  "
                >
                  Finds it difficult to assess improvement as a player.
                </span>
              </div>
            </div> 
            {/* Statement */}
            <div
              className="
                border-border

                lg:border-l

                lg:pl-6
              "
            >
              <h4
                className="
                  font-medium

                  text-foreground
                "
              >
                Defining the Problem
              </h4>

              <p
                className="
                  mt-4

                  italic
                  leading-relaxed

                  text-muted
                "
              >
                Board gamers enjoy countless games and events, but have no single place to track their play history, gaming network, and growth as players.
              </p>
            </div>
          </div>
        </section>
        {/* Market Research */}
        <section
          className="
            rounded-[24px]

            border
            border-border

            bg-card

            p-6
          "
        >
          <h3
            className="
              font-semibold

              text-foreground
            "
          >
            Market Research
          </h3>

          <div
            className="
              mt-3

              grid
              grid-cols-2

              gap-2
            "
          >
            {research.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    rounded-xl
 
                    p-2

                    text-center

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-violet-500/30
                    "
                >
                  <div
                    className="
                      mx-auto

                      flex

                      h-12
                      w-12

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-violet-500
                    "
                  >
                    <Icon
                      className="
                        h-5
                        w-5

                        text-violet-400
                      "
                    />
                  </div>

                  <div
                    className="
                      mt-3

                      text-lg
                      font-semibold

                      text-foreground
                    "
                  >
                    {item.value}
                  </div>

                  <div
                    className="
                      mt-1

                      text-xs

                      leading-relaxed

                      text-muted
                    "
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* =======================
          Row 2
      ======================== */}
      <div
        className="
          grid
          gap-6
          lg:grid-cols-[2fr_1fr_2fr]
          lg:grid-cols-3
        "
      >
        {/* Offerings */}
        <section
          className="
            rounded-[24px]

            border
            border-border

            bg-card

            p-6
          "
        >
          <h3 className="font-semibold">
            Current Offerings
          </h3>

          <div
            className="
              mt-8

              grid
              grid-cols-2

              gap-8
            "
          >
            {offerings.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    flex
                    flex-col

                    items-center
                    text-center

                    transition-all
                    duration-300

                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      flex

                      h-16
                      w-16

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-violet-500
                    "
                  >
                    <Icon
                      className="
                        h-7
                        w-7

                        text-violet-400
                      "
                    />
                  </div>

                  <div
                    className="
                      mt-4

                      text-sm
                      font-medium

                      text-foreground
                    "
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Statistics */}
        <section
          className="
            rounded-[24px]

            border
            border-border

            bg-card

            p-6
          "
        >
          <h3 className="font-semibold">
            Statistics
          </h3>

          <div
            className="
              mt-10

              grid
              grid-cols-1

              gap-4
            "
          >
            {statistics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    rounded-xl
 
                    p-4

                    text-center

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-violet-500/30
                  "
                >
                  
                  <div
                    className="
                      mx-auto

                      flex

                      h-17
                      w-17

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-violet-500
                    "
                  >
                    <Icon
                  className="
                    h-7
                    w-7
                    text-violet-400
                  "
                />
                    
                    
                  </div>

                  <div
                    className="
                      mt-4

                      text-xl
                      font-bold

                      text-foreground
                    "
                  >
                    {item.value}
                  </div>

                  <div
                    className="
                      mt-1

                      text-xs

                      text-muted
                    "
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Metrics */}
        <section
    className="
    rounded-[24px]

    border
    border-border

    bg-card

    p-6
  "
>
  <h3 className="font-semibold">
    Metrics
  </h3>

  <div className="mt-1">
    {/* North Star */}
    <div className="mt-1">
      <h4
        className="
          text-sm
          font-medium

          text-violet-400
          
        "
      >
        North Star Metric
      </h4>

      <div
        className="
          mt-2

          grid
          grid-cols-1

          gap-4
        "
      >
        {northStarMetric.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                flex
                flex-col

                items-center
                text-center
                
                hover:-translate-y-1
                
              "
            >
              <div
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-violet-500
                  
                "
              >
                <Icon
                  className="
                    h-4
                    w-4

                    text-violet-400
                  "
                />
              </div>

              <span
                className="
                  mt-1

                  text-xs

                  text-muted
                "
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>

    {/* Success Metrics */}
    <div className="mt-1">
      <h4
        className="
          text-sm
          font-medium

          text-green-400
        "
      >
        L1 Metrics
      </h4>

      <div
        className="
          mt-2

          grid
          grid-cols-3

          gap-4
        "
      >
        {successMetrics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                flex
                flex-col

                items-center
                text-center
                
                hover:-translate-y-1
              "
            >
              <div
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-green-500
                "
              >
                <Icon
                  className="
                    h-4
                    w-4

                    text-green-400
                  "
                />
              </div>

              <span
                className="
                  mt-1

                  text-xs

                  text-muted
                "
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>

    {/* Counter Metrics */}
    <div className="mt-1">
      <h4
        className="
          text-sm
          font-medium

          text-orange-400
        "
      >
        Guardrail Metrics
      </h4>

      <div
        className="
          mt-2

          grid
          grid-cols-2

          gap-4
        "
      >
        {counterMetrics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                flex
                flex-col

                items-center
                text-center
                
                hover:-translate-y-1
              "
            >
              <div
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-orange-500
                "
              >
                <Icon
                  className="
                    h-4
                    w-4

                    text-orange-400
                  "
                />
              </div>

              <span
                className="
                  mt-1

                  text-xs

                  text-muted
                "
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
      </div>

      {/* =======================
          Quote
      ======================== */}
      <div
        className="
          border-t
          border-border

          pt-6

          text-center
        "
      >
        <p
          className="
            text-l
            font-semibold
            italic

            text-muted
          "
        >
          Transforming casual game nights
          into competitive and engaging
          experiences.
        </p>
      </div>
    </div>
  );
}