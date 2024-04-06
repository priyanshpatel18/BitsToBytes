"use client";
import store from "@/store/store";
import React from "react";

export default function Events() {
    const Store = store();
    return (
        <div
            className={`flex items-center justify-center text-[white] w-full h-[90vh] ${Store.calSans}`}
        >
            This page on construction..
        </div>
    );
}
