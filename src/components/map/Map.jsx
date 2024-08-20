import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup } from "react-simple-maps";
import { ThemeContext } from "../../utils/ThemeContext";
import { useContext } from "react";

const Map = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        // rotate: [-10.0, -52.0, 0],
        rotate: [-48, -10, 0],
        center: [-10, -10],
        scale: 1500
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="var(--sectext-color)"
        stroke="var(--text-color)"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            
            // geo.properties.name

            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[36.0800, 0.3031]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "var(--text-color)",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="var(--text-color)">
          {"Nakuru, Kenya"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
