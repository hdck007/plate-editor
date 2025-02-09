import { ELEMENT_MEDIA_EMBED } from "@udecode/plate";
import {
  CodeBlockElement,
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  ELEMENT_HR,
  ELEMENT_PARAGRAPH,
  MediaEmbedElement,
  StyledElement,
  withProps,
} from "@udecode/plate";
import { EmbedElement } from "../elements/EmbedElement";
import { HRElement } from "../elements/HRElement";

export const plateUI = createPlateUI({
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,
  [ELEMENT_PARAGRAPH]: withProps(StyledElement, {
    as: "p",
    styles: {
      root: {
        position: "relative",
        margin: 0,
        padding: "4px 0",
      },
    },
    prefixClassNames: "p",
  }),
  [ELEMENT_HR]: HRElement,
  [ELEMENT_MEDIA_EMBED]: EmbedElement,
});
