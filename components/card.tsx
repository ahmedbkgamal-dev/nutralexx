"use client";
import React from "react";

export function Card({ children, ...props }: any) {
  return <div {...props}>{children}</div>;
}

export function CardHeader({ children, ...props }: any) {
  return <div {...props}>{children}</div>;
}

export function CardContent({ children, ...props }: any) {
  return <div {...props}>{children}</div>;
}

export function CardTitle({ children, ...props }: any) {
  return <h3 {...props}>{children}</h3>;
}

export function CardDescription({ children, ...props }: any) {
  return <p {...props}>{children}</p>;
}
