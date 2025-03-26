import { type PropsWithChildren } from "react";

export type CourseGoalProp = PropsWithChildren<{
    title: string;
    id: number;
    onDelete: (id: number) => void;
  }>; 