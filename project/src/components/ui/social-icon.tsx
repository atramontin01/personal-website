import { Chrome, Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const ButtonSocialIconDemo = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/* google */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <Chrome className="h-4 w-4" />
      </Button>
      {/* github */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <Github className="h-4 w-4" />
      </Button>
      {/* linkedin */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
      {/* facebook */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <Facebook className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ButtonSocialIconDemo;
