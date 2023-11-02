import { CSSProperties, FC } from "react";
import { Collapse, CollapseProps, Descriptions } from "antd";

import { PetInfoCollapseProps } from "./info";

import Arrow from "../../assets/icons/arrow-down.svg";

import styles from "./PetInfoCollapse.module.scss";

const PetInfoCollapse: FC<PetInfoCollapseProps> = ({ data }) => {
  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) =>
    data.map((item, index) => ({
      key: index,
      label: item.name,
      children: (
        <Descriptions
          items={item.description.map((descItem, dIndex) => ({
            key: dIndex,
            label: descItem.label,
            children: descItem.value,
          }))}
        />
      ),
      style: panelStyle,
    }));

  const panelStyle: React.CSSProperties = {
    borderRadius: 0,
    border: "none",
  };

  return (
    <div>
      <Collapse
        className={styles.collapse}
        bordered={false}
        expandIcon={({ isActive }) => (
          <img
            src={Arrow}
            style={{ transform: `rotate(${isActive ? 180 : 0}deg)` }}
            className={styles.arrow}
          />
        )}
        items={getItems(panelStyle)}
      />
    </div>
  );
};

PetInfoCollapse.defaultProps = {
  data: [
    {
      name: "Pet 1",
      description: [
        {
          label: "label 1",
          value: "value 1",
        },
        {
          label: "label 2",
          value: "value 2",
        },
        {
          label: "label 3",
          value: "value 3",
        },
      ],
    },
    {
      name: "Pet 2",
      description: [
        {
          label: "label 1",
          value: "value 1",
        },
        {
          label: "label 2",
          value: "value 2",
        },
        {
          label: "label 3",
          value: "value 3",
        },
      ],
    },
    {
      name: "Pet 3",
      description: [
        {
          label: "label 1",
          value: "value 1",
        },
        {
          label: "label 2",
          value: "value 2",
        },
        {
          label: "label 3",
          value: "value 3",
        },
      ],
    },
  ],
};

export default PetInfoCollapse;
