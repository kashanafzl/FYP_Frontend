import React, { useState } from 'react';

function ExamManagement() {
  // State for Exam Schedule
  const [examData, setExamData] = useState({
    title: '',
    date: '',
    time: '',
    subject: '',
    examHall: ''
  });
  
  const [examList, setExamList] = useState([]);

  // State for Seating Plan
  const [seatingPlan, setSeatingPlan] = useState({
    studentName: '',
    rollNo: '',
    seatNo: '',
    examHall: ''
  });

  const [seatingList, setSeatingList] = useState([]);

  // State for Invigilation Plan
  const [invigilationData, setInvigilationData] = useState({
    invigilatorName: '',
    examHall: '',
    timeSlot: ''
  });

  const [invigilationList, setInvigilationList] = useState([]);

  // Handle change for Exam Schedule
  const handleExamChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };

  // Handle Exam Schedule Submission
  const handleExamSubmit = (e) => {
    e.preventDefault();
    setExamList([...examList, examData]);
    setExamData({ title: '', date: '', time: '', subject: '', examHall: '' });
  };

  // Handle Seating Plan Change
  const handleSeatingChange = (e) => {
    const { name, value } = e.target;
    setSeatingPlan({ ...seatingPlan, [name]: value });
  };

  // Handle Seating Plan Submission
  const handleSeatingSubmit = (e) => {
    e.preventDefault();
    setSeatingList([...seatingList, seatingPlan]);
    setSeatingPlan({ studentName: '', rollNo: '', seatNo: '', examHall: '' });
  };

  // Handle Invigilation Plan Change
  const handleInvigilationChange = (e) => {
    const { name, value } = e.target;
    setInvigilationData({ ...invigilationData, [name]: value });
  };

  // Handle Invigilation Plan Submission
  const handleInvigilationSubmit = (e) => {
    e.preventDefault();
    setInvigilationList([...invigilationList, invigilationData]);
    setInvigilationData({ invigilatorName: '', examHall: '', timeSlot: '' });
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Exam Management System</h1>
      
      {/* Exam Schedule Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Create Exam Schedule</h2>
        <form onSubmit={handleExamSubmit} className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              name="title"
              value={examData.title}
              onChange={handleExamChange}
              placeholder="Exam Title"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="date"
              name="date"
              value={examData.date}
              onChange={handleExamChange}
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              type="time"
              name="time"
              value={examData.time}
              onChange={handleExamChange}
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="subject"
              value={examData.subject}
              onChange={handleExamChange}
              placeholder="Subject"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="examHall"
              value={examData.examHall}
              onChange={handleExamChange}
              placeholder="Exam Hall"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white p-3 rounded-lg">
            Add Exam
          </button>
        </form>

        {/* Display Exam List */}
        <h3 className="text-xl font-semibold mt-8">Scheduled Exams</h3>
        <ul className="mt-4 space-y-4">
          {examList.map((exam, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <strong>{exam.title}</strong> - {exam.subject}, {exam.date}, {exam.time} (Hall: {exam.examHall})
            </li>
          ))}
        </ul>
      </section>

      {/* Seating Plan Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Create Seating Plan</h2>
        <form onSubmit={handleSeatingSubmit} className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              name="studentName"
              value={seatingPlan.studentName}
              onChange={handleSeatingChange}
              placeholder="Student Name"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="rollNo"
              value={seatingPlan.rollNo}
              onChange={handleSeatingChange}
              placeholder="Roll Number"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="seatNo"
              value={seatingPlan.seatNo}
              onChange={handleSeatingChange}
              placeholder="Seat Number"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="examHall"
              value={seatingPlan.examHall}
              onChange={handleSeatingChange}
              placeholder="Exam Hall"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white p-3 rounded-lg">
            Add Seating Plan
          </button>
        </form>

        {/* Display Seating List */}
        <h3 className="text-xl font-semibold mt-8">Seating Arrangements</h3>
        <ul className="mt-4 space-y-4">
          {seatingList.map((seat, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <strong>{seat.studentName}</strong> (Roll No: {seat.rollNo}) - Seat: {seat.seatNo} (Hall: {seat.examHall})
            </li>
          ))}
        </ul>
      </section>

      {/* Invigilation Assignment Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Assign Invigilators</h2>
        <form onSubmit={handleInvigilationSubmit} className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              name="invigilatorName"
              value={invigilationData.invigilatorName}
              onChange={handleInvigilationChange}
              placeholder="Invigilator Name"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="examHall"
              value={invigilationData.examHall}
              onChange={handleInvigilationChange}
              placeholder="Exam Hall"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="timeSlot"
              value={invigilationData.timeSlot}
              onChange={handleInvigilationChange}
              placeholder="Time Slot"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white p-3 rounded-lg">
            Assign Invigilator
          </button>
        </form>

        {/* Display Invigilation List */}
        <h3 className="text-xl font-semibold mt-8">Invigilator Assignments</h3>
        <ul className="mt-4 space-y-4">
          {invigilationList.map((invigilator, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <strong>{invigilator.invigilatorName}</strong> - Hall: {invigilator.examHall} (Time Slot: {invigilator.timeSlot})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ExamManagement;
