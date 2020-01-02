import { ControlType, PropertyControls } from "framer";

export function generatePropertyControls(
  options: {
    hidden?: (props: any) => boolean;
    omittedProperties?: string[];
  } = {}
): PropertyControls {
  const properties: PropertyControls = {
    // category: {
    //   type: ControlType.String,
    //   title: "Category",
    //   defaultValue: options.defaultIconCategory || "action",
    //   hidden: options.hidden
    // },
    label: {
      type: ControlType.String,
      placeholder: "",
      title: "Label"
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
