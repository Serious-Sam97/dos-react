import React, { useEffect, useRef, useState } from "react";
import { DosPlayer as Instance, DosPlayerFactoryType } from "js-dos";

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
    bundleUrl: string;
}

export default function DosPlayer(props: PlayerProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const [dos, setDos] = useState<Instance | null>(null);

    useEffect(() => {
        if (!rootRef.current) return;

        const localRoot = rootRef.current;
        const instance = Dos(localRoot);
        setDos(instance);

        return () => {
            instance.stop();

            if (localRoot) {
                localRoot.innerHTML = "";
            }
        };
    }, []); // array vazio = apenas no mount

    useEffect(() => {
        if (dos !== null) {
            dos.run(props.bundleUrl);
        }
    }, [dos, props.bundleUrl]);

    return <div ref={rootRef} style={{ width: "100%", height: "100%" }} />;
}