import assert from "node:assert/strict";
import test from "node:test";

import { getMemberGuide } from "./index";

test("회원 ID 1은 등록된 GitHub 아이디를 포함한다", () => {
  assert.equal(
    getMemberGuide(1),
    "ID: 1, 이름: 민준, 역할: LEADER, GitHub: minjun-dev",
  );
});

test("회원 ID 2는 GitHub 아이디가 등록되지 않았음을 안내한다", () => {
  assert.equal(
    getMemberGuide(2),
    "ID: 2, 이름: 서연, 역할: MEMBER, GitHub: 등록되지 않음",
  );
});

test("존재하지 않는 회원 ID는 오류 없이 찾을 수 없음을 안내한다", () => {
  assert.equal(getMemberGuide(999), "ID 999에 해당하는 회원을 찾을 수 없습니다.");
});
