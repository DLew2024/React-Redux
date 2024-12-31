import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "sjdj",
      label: "Can I use your toothbrush",
      content:
        "You can use my toothbrush anytime you want. You can use my toothbrush anytime you want. You can use my toothbrush anytime you want. You can use my toothbrush anytime you want.",
    },
    {
      id: "fij",
      label: "Can I use his toothbrush",
      content:
        "You can use my toothbrush anytime you want. You can use my toothbrush anytime you want. You can use my toothbrush anytime you want. You can use my toothbrush anytime you want.",
    },
    {
      id: "jef",
      label: "Can I use her toothbrush",
      content:
        "You can use my toothbrush anytime you want. You can use my toothbrush anytime you want. You can use my toothbrush anytime you want. You can use my toothbrush anytime you want.",
    },
    {
      id: "ddkj",
      label: "Can I use they toothbrush",
      content:
        "You can use my toothbrush anytime you want. You can use my toothbrush anytime you want. You can use my toothbrush anytime you want. You can use my toothbrush anytime you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
