import React, { useState } from 'react'
import Modal from '../../components/molecules/Modal'
import CreateProjectForm from '../projects/CreateProjectForm'
import ProjectsList from '../projects/ProjectsList'
import { ReactComponent as PlusIcon } from '../../components/icons/plus.svg'
import { ReactComponent as CrossIcon } from '../../components/icons/cross.svg'
import { ReactComponent as CalendarIcon } from '../../components/icons/calendar.svg'
import { ReactComponent as BriefcaseIcon } from '../../components/icons/briefcase.svg'
import { ReactComponent as PenIcon } from '../../components/icons/pen.svg'
import Menu from '../../components/organisms/Menu'

const TasksMenu = () => {
  const [showProjectModal, setShowProjectModal] = useState(false)

  return (
    <Menu>
      <Menu.Nav
        title="Projects"
        headerButton={
          <button
            onClick={() => setShowProjectModal(true)}
            className="btn-icon btn-icon-fill-light ml-2">
            <PlusIcon />
          </button>
        }>
        <ProjectsList />
      </Menu.Nav>
      <hr />
      <Menu.Nav title="Filter">
        <Menu.Item Icon={PlusIcon} text="Active" badge="8" />
        <Menu.Item Icon={CrossIcon} text="Completed" badge="12" />
      </Menu.Nav>
      <hr />
      <Menu.Nav title="Advanced">
        <Menu.Item Icon={CalendarIcon} text="Due Date" />
        <Menu.Item Icon={BriefcaseIcon} text="Per Project" />
        <Menu.Item Icon={PenIcon} text="Assigned by" />
      </Menu.Nav>
      <Modal
        show={showProjectModal}
        setShow={setShowProjectModal}
        title="Create a new project">
        <CreateProjectForm setShowProjectModal={setShowProjectModal} />
      </Modal>
    </Menu>
  )
}

export default TasksMenu
