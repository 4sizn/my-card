import Link from "next/link";
import { Button } from "../ui/button";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import { NotReadyAlert } from "./not-ready-alert";

export function Navbar() {
  return (
    <div className="fixed bottom-0 w-full h-8 bg-slate-600">
      <div className="flex w-full justify-evenly">
        <Button asChild variant="ghost">
          <Link href="/service/wallets">내 지갑</Link>
        </Button>
        <NotReadyAlert>
          <AlertDialogTrigger asChild>
            <Button variant="ghost">내 카드</Button>
          </AlertDialogTrigger>
        </NotReadyAlert>
        <NotReadyAlert>
          <AlertDialogTrigger asChild>
            <Button variant="ghost">성취</Button>
          </AlertDialogTrigger>
        </NotReadyAlert>
        <NotReadyAlert>
          <AlertDialogTrigger asChild>
            <Button variant="ghost">내설정</Button>
          </AlertDialogTrigger>
        </NotReadyAlert>
      </div>
    </div>
  );
}
