import React, { useState, useRef } from "react";
import { Form, Card } from "react-bootstrap";
import { CosmosBalanceCard } from "./CosmosBalanceCard";

function CosmosBalanceForm() {

    // Usetstate for storing ComboBox details state.
    const [chainId, setChainId] = useState("cosmoshub-4")
    const [token, setToken] = useState("uatom")
    const [rpcEndpoint, setRpcEndpoint] = useState("https://rpc.atomscan.com/")
    const [exponent, setExponent] = useState(1e6)
    const [tokenName, setTokenName] = useState("ATOM")

    const defaultVariantValues = {
        "cosmoshub-4": { token: "uatom", rpcEndpoint: "https://rpc.atomscan.com/", exponent: 1e6, tokenName: "ATOM" },
        "osmosis-1": { token: "uosmo", rpcEndpoint: "https://rpc-osmosis.blockapsis.com/", exponent: 1e6, tokenName: "OSMO" },
        "other": { token: "", rpcEndpoint: "", exponent: 1e6, tokenName: "" }
    }

    const balanceRef = useRef();

    const handleSelect = (e) => {

        // Handle change of selection in ComboBox.
        setChainId(e.currentTarget.value)
        balanceRef.current.handleClearUtils()
        
        if(!!defaultVariantValues[e.currentTarget.value]){

            // Set new values.
            setToken(defaultVariantValues[e.currentTarget.value]["token"])
            setRpcEndpoint(defaultVariantValues[e.currentTarget.value]["rpcEndpoint"])
            setExponent(defaultVariantValues[e.currentTarget.value]["exponent"])
            setTokenName(defaultVariantValues[e.currentTarget.value]["tokenName"])
        }
    }

    return (
        <Card className="text-center row">
            <Card.Body>
                    <CosmosBalanceCard 
                        ref={balanceRef} 
                        chainId={chainId}
                        rpcEndpoint={rpcEndpoint} 
                        token={token} 
                        exponent={exponent} 
                        tokenName={tokenName} 
                        />
            </Card.Body>
        </Card>
    )
}

export default CosmosBalanceForm