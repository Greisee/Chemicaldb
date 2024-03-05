import { React, useEffect, useState } from "react";
import {Helmet} from "react-helmet";

export default function MainPage() {
    return (
        <div>
            <Helmet>
                <title>Chemical Compounds at CC</title>
            </Helmet>
            <h2>
                Welcome to the Cornell College Chemical Compound Database!
            </h2>
        </div>
    )
}