import { IconsList } from "../../../components/IconsList";
import { Button } from "../../Inputs/Button/Button";

type CardActionsProps = {
  onAddDetails: () => void;
  onViewDetails: () => void;
  hasAddEditPermission: boolean;
  hasViewPermission: boolean;
};

const CardActions = ({
  onAddDetails,
  onViewDetails,
  hasAddEditPermission = false,
  hasViewPermission = false,
}: CardActionsProps) => {
  return (
    <div className="flex justify-between mt-4 gap-2">
      {hasAddEditPermission && (
        <Button
          onClick={onAddDetails}
          iconStart={IconsList.BiPlusCircle}
          label="Expand details"
          variant="filled"
          size="small"
        />
      )}
      {hasViewPermission && (
        <Button
          onClick={onViewDetails}
          label="View details"
          iconStart={IconsList.GrOverview}
          variant="outlined"
        />
      )}
    </div>
  );
};

export default CardActions;
