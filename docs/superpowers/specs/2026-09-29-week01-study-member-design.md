# Week 01 Study Member Mission Design

## Goal

Create a self-contained TypeScript project under `week01` that completes the required study-member management mission.

## Project Structure

- `week01/package.json`: project scripts and development dependencies
- `week01/tsconfig.json`: strict TypeScript compiler settings
- `week01/src/index.ts`: member types, sample members, lookup behavior, and output for IDs 1, 2, and 999
- `week01/src/index.test.ts`: behavior tests using Node's built-in test runner

The root `README.md` remains unchanged.

## Domain Model

`MemberRole` is the literal union `"LEADER" | "MEMBER"`.

`StudyMember` contains:

- `id: number`
- `name: string`
- `role: MemberRole`
- `githubId?: string`

The sample data contains at least two members with different information: one has a GitHub ID and one does not. All values are fictional and contain no personal information.

## Behavior

`getMemberGuide(id: number): string` finds a member by ID and returns a readable guide string containing the member's ID, name, role, and GitHub information.

- When `githubId` exists, the guide includes it.
- When `githubId` is absent, the guide explicitly says it is not registered.
- When the member does not exist, the function returns a not-found guide instead of throwing.

The executable entry point prints the results for IDs `1`, `2`, and `999`.

## Tooling and Verification

The project uses `strict: true`. Scripts support type checking, compilation, execution, and tests. Node's built-in test runner covers:

- a member with a GitHub ID;
- a member without a GitHub ID;
- a missing member.

Final verification runs `pnpm exec tsc --noEmit`, the complete test command, compilation, and execution.

## Out of Scope

- Changes to the root `README.md`
- Optional missions
- Notion submission or GitHub publishing
- Additional application features or UI
