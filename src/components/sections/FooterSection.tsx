import { Button, Card } from "@heroui/react";

export function FooterSection() {
  return (
    <footer className="w-full">
      <Card variant="transparent" className="">
        <Card.Header className="gap-2">
          <Card.Content className="flex flex-row gap-2 ">
            <div className="flex-1"></div>
            <a href="https://github.com/Rjshakya">
              <Button variant="tertiary">Github</Button>
            </a>
            <a href="https://x.com/RajShak96083714">
              <Button variant="tertiary">X</Button>
            </a>
            <a href="mailto:rajshakya631@gmail.com">
              <Button variant="tertiary">Mail</Button>
            </a>
          </Card.Content>
        </Card.Header>
      </Card>
    </footer>
  );
}
