export type MemberRole = "LEADER" | "MEMBER";

export interface StudyMember {
  id: number;
  name: string;
  role: MemberRole;
  githubId?: string;
}

export const members: StudyMember[] = [
  {
    id: 1,
    name: "민준",
    role: "LEADER",
    githubId: "minjun-dev",
  },
  {
    id: 2,
    name: "서연",
    role: "MEMBER",
  },
];

export function getMemberGuide(id: number): string {
  const member = members.find((currentMember) => currentMember.id === id);

  if (!member) {
    return `ID ${id}에 해당하는 회원을 찾을 수 없습니다.`;
  }

  const githubId = member.githubId ?? "등록되지 않음";

  return `ID: ${member.id}, 이름: ${member.name}, 역할: ${member.role}, GitHub: ${githubId}`;
}

if (require.main === module) {
  [1, 2, 999].forEach((id) => {
    console.log(getMemberGuide(id));
  });
}
