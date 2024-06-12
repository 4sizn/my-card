import React from "react";
import Image from "next/image";
import { LuLink } from "react-icons/lu";
import { BiExport } from "react-icons/bi";

import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { NotReadyAlert } from "@/components/service/not-ready-alert";

const CARD_WIDTH = 660;
const CARD_HEIGHT = 921;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardContent: React.ReactNode;
  isBack?: boolean;
  cardBackContent?: React.ReactNode;
}

function Card({
  cardContent,
  cardBackContent,
  onClick,
  isBack = false,
}: CardProps) {
  return (
    <div
      className="border aspect-card bg-background rounded-xl overflow-hidden"
      onClick={onClick}
    >
      {!isBack ? cardContent : cardBackContent}
    </div>
  );
}

function BackCardContent() {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <Image src="/qr_code.svg" width={200} height={200} alt="qr-code" />
      <div>
        <Button variant="ghost" asChild className="w-[60px] h-[60px]">
          <Image
            src="/Instagram_Glyph_Gradient.svg"
            width={60}
            height={60}
            alt="icon_instagram
        "
          />
        </Button>
        <Button variant="ghost" asChild className="w-[60px] h-[60px]">
          <LuLink className="w-[60px] h-[60px]" />
        </Button>
        <Button variant="ghost" asChild className="w-[60px] h-[60px]">
          <BiExport className="w-[60px] h-[60px]" />
        </Button>
      </div>
    </div>
  );
}

function CardManagementContent() {
  return (
    <div className="flex justify-center gap-2 p-8">
      <NotReadyAlert>
        <AlertDialogTrigger asChild>
          <Button variant="outline">카드 등록</Button>
        </AlertDialogTrigger>
        <AlertDialogTrigger asChild>
          <Button variant="outline">카드 관리</Button>
        </AlertDialogTrigger>
      </NotReadyAlert>
    </div>
  );
}

function RegistrationCardContent() {
  return (
    <div>
      <Image
        src="/registration.png"
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        alt="sample"
      />
    </div>
  );
}

/**
 * @description 명함 공유용으로 사용합니다.
 */
function AppCardContent() {
  return (
    <div className="flex flex-col items-center h-full">
      {/* header */}
      <Image
        className="w-full h-1/6 object-cover"
        src="/profile-bg.jpg"
        width={CARD_WIDTH}
        height={CARD_HEIGHT / 15}
        alt="profile"
      />
      {/* content */}
      <div className="flex flex-col p-8 justify-around items-center flex-1 overflow-y-hidden">
        <div className="absolute top-[-10px] p-4 z-10">
          <Avatar
            className="h-[150px] w-[150px]"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
          >
            <AvatarImage src="https://github.com/4sizn.png" alt="@shadcn" />
            <AvatarFallback delayMs={600}>4sizn</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold text-black pt-5">heeseok Shin</h2>
        <h3 className="text-sm text-slate-600">Frontend Developer</h3>
        <div className="text-sm text-slate-600">custom company</div>
        <div className="text-sm text-slate-900">
          010-3521-4210 / 4sizn@naver.com
        </div>
        <p className="leading-tight tracking-wide py-3 text-justify">
          반갑습니다.👋 신희석입니다. 웹 개발자입니다. IT 트렌드와 신기술에
          관심이 많으며, 다가올 미래에 대해 생각이 많은 몽상가이기도 합니다.
          아이디어를 구현하면서 일어나는 문제점을 인식하고 해결함으로써 나만의
          것으로 만들어 가는 과정을 통해 문제 해결 능력을 키워왔습니다. 좋은
          동료들과 이야기를 나눠가며 좋은 서비스를 만들고 싶습니다.
        </p>
      </div>
    </div>
  );
}

type AchievementData = {
  title: string;
  date: string;
  successRate: string;
  contributors: string;
  organizer: string;
  src?: string;
  isApproved: boolean;
};
type AchievementContentProps = {
  data: AchievementData;
};
function AchievementContent({
  data: { title, date, organizer, contributors, src },
}: AchievementContentProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={src || "/achievement-marathon.png"}
        width={CARD_WIDTH / 3}
        height={CARD_HEIGHT / 3}
        alt="sample"
      />
      <h2>{title}</h2>
      <div className="flex text-center">
        <div>
          <div>{date}</div>
          <div>Date</div>
        </div>
        <div>
          <div>{organizer}</div>
          <div>주최</div>
        </div>
        <div>
          <div>{contributors}</div>
          <div>Contributors</div>
        </div>
      </div>
    </div>
  );
}

interface CardListProps extends React.HTMLAttributes<HTMLUListElement> {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
function CardList({ onClick }: CardListProps) {
  const cardContentList = [
    {
      cardContent: <AppCardContent />,
      cardBackContent: <BackCardContent />,
    },
    {
      cardContent: (
        <AchievementContent
          data={{
            title: "정보처리기사",
            contributors: "unknown",
            date: "2016-07-20",
            successRate: "100%",
            organizer: "한국산업인력공단",
            src: "/coperPub_logo28.png",
            isApproved: true,
          }}
        />
      ),
    },
    {
      cardContent: (
        <AchievementContent
          data={{
            contributors: "1",
            date: "2021-09-20",
            successRate: "100%",
            title: "First Achievement",
            organizer: "한국산업인력공단",
            src: "/coperPub_logo28.png",
            isApproved: true,
          }}
        />
      ),
    },
    {
      cardContent: (
        <AchievementContent
          data={{
            contributors: "1",
            date: "2021-09-20",
            successRate: "100%",
            title: "First Achievement",
            organizer: "한국산업인력공단",
            src: "/coperPub_logo28.png",
            isApproved: true,
          }}
        />
      ),
    },
    {
      cardContent: (
        <AchievementContent
          data={{
            contributors: "unknown",
            date: "2012-06-01",
            successRate: "100%",
            title: "정보처리기능사",
            src: "/coperPub_logo28.png",
            organizer: "한국산업인력공단",
            isApproved: true,
          }}
        />
      ),
    },
    {
      cardContent: (
        <AchievementContent
          data={{
            contributors: "unknown",
            date: "2015-08-01",
            successRate: "100%",
            title: "융복합 창업캠프기술사업화상",
            organizer: "한국산학협력연구원",
            isApproved: false,
          }}
        />
      ),
    },
    {
      cardContent: <RegistrationCardContent />,
    },
    {
      cardContent: (
        <Image
          src="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          alt="sample"
        />
      ),
    },
    {
      cardContent: (
        <Image
          src="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          alt="sample"
        />
      ),
    },
    {
      cardContent: (
        <Image
          src="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          alt="sample"
        />
      ),
    },
    {
      cardContent: <CardManagementContent />,
    },
  ];
  return (
    <ul className="grid grid-cols-1 grid-rows-2 gap-2 ">
      {cardContentList.map(({ cardContent, cardBackContent }, index) => {
        return (
          <li
            className={`sticky top-10`}
            key={index}
            style={{ paddingTop: `${index * 30}px` }}
          >
            <Card
              cardContent={cardContent}
              onClick={onClick}
              {
                /* cardBackContent */
                ...(cardBackContent && { cardBackContent })
              }
              isBack={cardBackContent ? true : false}
            />
          </li>
        );
      })}
    </ul>
  );
}

export { CardList };
