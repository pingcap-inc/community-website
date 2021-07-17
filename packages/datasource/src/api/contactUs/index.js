import client from '../client';

export const qualifications = () => client.get('/api/contact-us/validate-qualification');

export const reportIncident = ({
  emergency_type,
  priority,
  tidb_version,
  summary,
  background,
  appearance,
  problem,
  affect,
}) =>
  client.post('/api/contact-us/emergencies', {
    emergency_type,
    priority,
    tidb_version,
    summary,
    background,
    appearance,
    problem,
    affect,
  });

export const requestCooperation = ({ cooperation_type, detail }) =>
  client.post('/api/contact-us/cooperation', {
    cooperation_type,
    detail,
  });

export const askForConsultancy = ({
  tidb_node_num,
  tikv_node_num,
  tiflash_node_num,
  occupation_rate_of_tidb,
  tidb_version,
  key_scene,
  current_scenarios_and_architecture,
  pain_points,
  technical_debt,
  expect_benefits_from_tidb,
  launch_or_poc_date,
  person_resource,
  tidb_usage,
}) =>
  client.post('/api/contact-us/communication', {
    tidb_node_num,
    tikv_node_num,
    tiflash_node_num,
    occupation_rate_of_tidb,
    tidb_version,
    key_scene,
    current_scenarios_and_architecture,
    pain_points,
    technical_debt,
    expect_benefits_from_tidb,
    launch_or_poc_date,
    person_resource,
    tidb_usage,
  });
