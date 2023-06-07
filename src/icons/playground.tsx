import kebabCase from "kebab-case";
import { ComponentType, SVGProps, useMemo } from "react";
import * as components from "./dist";
import classes from "./playground.module.css";
import "./sprite/loader";
import SpriteIcon from "./sprite/sprite-icon";

export default function Playground() {
  const keys = useMemo(() => {
    try {
      return Object.keys(components);
    } catch (error) {
      return undefined;
    }
  }, []);

  const spriteIcons = useMemo(() => {
    try {
      return keys?.map((k) => {
        return (
          <div id={k} key={k} className={classes["item"]}>
            <SpriteIcon id={kebabCase(k).substring(1)} />
            <p>{k}</p>
          </div>
        );
      });
    } catch (error) {
      return undefined;
    }
  }, [keys]);

  const icons = useMemo(() => {
    try {
      return keys?.map((k) => {
        const Icon = (components as any)[k] as ComponentType<
          SVGProps<SVGSVGElement>
        >;
        return (
          <div id={k} key={k} className={classes["item"]}>
            <Icon />
            <p>{k}</p>
          </div>
        );
      });
    } catch (error) {
      return undefined;
    }
  }, [keys]);

  return (
    <div>
      <div>
        <div style={{ margin: "24px 24px 0", textAlign: "left" }}>
          Sprite Impl.
        </div>
        <div className={classes["block"]}>{spriteIcons}</div>
      </div>
      <div>
        <div style={{ margin: "24px 24px 0", textAlign: "left" }}>
          SVGO Impl.
        </div>
        <div className={classes["block"]}>{icons}</div>
      </div>
      <p style={{ color: "#999" }}>
        [图标名]-[状态?]-[形状?]-[描线?]-[方向?]@[1,2,3]x,带?号为可选
      </p>
    </div>
  );
}
