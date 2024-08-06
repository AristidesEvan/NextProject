import { Circle } from "./Circle";
import { Square } from "./Square";

export const GeoForm = () => {
    return (
        <div className="">
            <h1>Formas geométricas!</h1>
            
            <div className="flex gap-2 border-2 p-3">
                <Square/>
                <Circle/>
            </div>

        </div>
    );
} 