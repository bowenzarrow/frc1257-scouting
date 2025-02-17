import CheckBox from "@/components/CheckBox"
import DropDown from "@/components/DropDown"
import NumberInput from "@/components/NumberInput"
import TextInput from "@/components/TextInput"

interface PreMatchProps {}

const PreMatch = ({}: PreMatchProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center mt-16 mb-4 text-4xl font-semibold">
        Pre-Match
      </div>
      <div className="flex flex-row lg:flex-col border-2 border-gray-600 mx-auto mb-16 items-center justify-center w-min">
        <div className="flex flex-col lg:flex-row">
          <TextInput
            title="Initials"
            id="initials"
            className="w-40 sm:w-64"
            maxLength={2}
            rows={1}
            validChars={/[A-Za-z]/}
          />
          <DropDown
            title="Event"
            id="event"
            options={[
              "Training",
              "Hatboro-Horsham",
              "Mount Olive",
              "Seneca",
              "Allentown",
              "SCH",
              "Montgomery",
              "Bensalem",
              "Warren Hills",
              "DCMP",
              "Worlds",
            ]}
            className="w-40 sm:w-64"
          />
          <NumberInput
            title="Match Number"
            id="match_number"
            className="w-40 sm:w-64"
            min={1}
            max={1000}
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <DropDown
            title="Position"
            id="position"
            options={["Near", "Middle", "Far"]}
            className="w-40 sm:w-64"
          />
          <DropDown
            title="Cage Position"
            id="cage_position"
            options={["Shallow", "Deep"]}
            className="w-40 sm:w-64"
          />
          <NumberInput
            title="Team Number"
            id="team_number"
            className="w-40 sm:w-64"
            min={1}
            max={10000}
          />
          <CheckBox
            title="Preload"
            id="preload"
            className="w-49 sm:w-74 h-26 lg:h-auto"
          />
        </div>
      </div>
    </>
  )
}

export default PreMatch
