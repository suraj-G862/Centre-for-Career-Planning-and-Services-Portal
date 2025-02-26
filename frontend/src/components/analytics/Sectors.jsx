import React, { useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const valueFormatter = (item) => `${item.value}%`;
const getSum = (obj) => Object.values(obj).reduce((acc, val) => acc + val, 0);
const normalize = (value, scale, total) => ((value / total) * scale).toFixed(2);

const Sectors = ({ sectors = {} }) => {
    if (!sectors || Object.keys(sectors).length === 0) {
        return (
            <div className="p-4 ml-12 w-[600px] bg-white rounded-xl m-2 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Sectors</h3>
                <p>No data available.</p>
            </div>
        );
    }

    let sectorsCompanyNorm = Object.entries(sectors).map(([key, value]) => ({
        key,
        label: key === "Other" ? "Other Sectors" : key,
        value: Number(normalize(value, 100, getSum(sectors))),
    }));
    return (
        <div className="p-4 w-[600px] bg-white rounded-xl shadow-lg transition-transform hover:scale-105 duration-300 mb-16">
            <h3 className="text-2xl font-semibold mb-6">Sectors</h3>
            <PieChart
                series={[
                    {
                        data: sectorsCompanyNorm,
                        highlightScope: { fade: "global", highlight: "item" },
                        valueFormatter,
                        innerRadius: 100,
                    },
                ]}
                colors={["#a6d8ff", "#78f1fa", "#00ffc8", "#02ad88", "#015e4a"]}
                height={300}
                width={600}
            />
        </div>
    );
};

export default Sectors;
