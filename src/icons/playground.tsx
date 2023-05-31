import { ComponentType, SVGProps, useMemo } from "react";
import * as components from "./dist";
import classes from "./playground.module.css";

export default function Playground() {
  const icons = useMemo(() => {
    try {
      return Object.keys(components).map((k) => {
        const Icon = (components as any)[k] as ComponentType<
          SVGProps<SVGSVGElement>
        >;
        return (
          <div className={classes["item"]}>
            <Icon id={k} key={k} />
            <p>{k}</p>
          </div>
        );
      });
    } catch (error) {
      return undefined;
    }
  }, []);

  return (
    <div>
      <div className={classes["block"]}>{icons}</div>
      <p style={{ color: "#999" }}>
        [图标名]-[状态?]-[形状?]-[描线?]-[方向?]@[1,2,3]x,带?号为可选
      </p>
    </div>
  );
}
