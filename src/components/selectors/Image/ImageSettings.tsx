import { ToolbarItem, ToolbarSection } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const ImageSettings = () => {
  return (
    <>
      <ToolbarSection
        title="Image URL"
        props={['imageUrl']}
        summary={({ imageUrl }: any) => {
          return <img src={imageUrl} alt="Preview" style={{ maxWidth: '100%' }} />;
        }}
      >
        <ToolbarItem full={true} propKey="imageUrl" type="text" label="Image URL" />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={['margin']}
        summary={({ margin }: any) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection title="Decoration">
        <ToolbarItem propKey="imageStyle" type="radio" label="Style">
          <ToolbarRadio value="full" label="Full" />
          <ToolbarRadio value="rounded" label="Rounded" />
        </ToolbarItem>
      </ToolbarSection>
    </>
  );
};
