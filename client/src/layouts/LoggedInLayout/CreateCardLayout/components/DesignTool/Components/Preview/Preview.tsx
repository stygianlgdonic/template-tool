import React from "react";

export default function Preview({ setIsOpen }) {
    return (
        <header className="flex justify-between p-4">
            <button
                className="bg-greenish text-white rounded px-4 py-1"
                onClick={() => setIsOpen(true)}
            >
                open
            </button>
        </header>
    );
}
