import { ControlType, PropertyControls } from "framer";

export function generatePropertyControls(
  options: {
    hidden?: (props: any) => boolean;
    omittedProperties?: string[];
  } = {}
): PropertyControls {
  const properties: PropertyControls = {
    min: {
      type: ControlType.Number,
      title: "Min",
      step: 1,
      displayStepper: true
    },
    max: {
      type: ControlType.Number,
      title: "Max",
      step: 1,
      displayStepper: true
    },
    stacked: {
      type: ControlType.Boolean,
      title: "Stacked",
      defaultValue: true
    },
    discrete: {
      type: ControlType.Boolean,
      title: "Discrete",
      defaultValue: true
    },
    label: {
      type: ControlType.String,
      title: "Label",
      defaultValue: "Label"
    },
    xtitle: {
      type: ControlType.String,
      title: "X Title",
      defaultValue: "X Title"
    },
    ytitle: {
      type: ControlType.String,
      title: "Y Title",
      defaultValue: "Y Title"
    },
    prefix: {
      type: ControlType.String,
      title: "Prefix",
      defaultValue: ""
    },
    suffix: {
      type: ControlType.String,
      title: "Suffix",
      defaultValue: ""
    },
    curved: {
      type: ControlType.Boolean,
      title: "Curved",
      defaultValue: true
    },
    legend: {
      type: ControlType.Enum,
      title: "Legned",
      options: ["", "bottom", "left", "top", "right"],
      optionTitles: ["None", "Bottom", "Left", "Top", "Right"]
    }
  };

  if (!!options.omittedProperties) {
    return Object.keys(properties).reduce<PropertyControls>((acc, key) => {
      if (options.omittedProperties.indexOf(key) === -1) {
        acc[key] = properties[key];
      }
      return acc;
    }, {});
  }

  return properties;
}
