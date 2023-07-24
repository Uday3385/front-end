import DragDropDirectionArrows from '../DragDropDirectionArrows';
import DropRegion from '../DropRegion';

export default function ReportBuilderDropContainer() {
    return (
        <>
            <div className="reportPrompts">
                <DragDropDirectionArrows contextType="reportPrompts" />

                <div className="dropBoxRapper">
                    <DropRegion contextType="reportPrompts" />
                </div>
            </div>
            <div className="reportColumns">
                <DragDropDirectionArrows contextType="columns" />

                <div className="dropBoxRapper">
                    <DropRegion contextType="columns" />
                </div>
            </div>
        </>
    );
}
