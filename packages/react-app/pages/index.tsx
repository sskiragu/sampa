import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import Product from "@/components/Product";

export default function Home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h1">
                <Product />
            </div>
            {isConnected ? (
                <div className="h2 text-center">
                    Your address: {userAddress}
                </div>
            ) : (
                <div>No Wallet Connected</div>
            )}
        </div>
    );
}
