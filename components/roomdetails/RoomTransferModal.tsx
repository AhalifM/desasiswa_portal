// RoomTransferModal component
import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@/components/ui/modal";
import { Select, Option } from "@/components/card/Card";

const RoomTransferModal = ({ isOpen, onClose, onTransfer, rooms }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleTransfer = () => {
    onTransfer(selectedRoom);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Transfer Room</ModalHeader>
      <ModalBody>
        <div className="mb-4">
          <label htmlFor="room" className="block font-medium mb-2">
            Select New Room
          </label>
          <Select id="room" value={selectedRoom} onChange={setSelectedRoom}>
            <Option value="">Choose a room</Option>
            {rooms.map((room) => (
              <Option key={room.name} value={room.name}>
                {room.name} - {room.currentOccupant || "Vacant"}
              </Option>
            ))}
          </Select>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="primary"
          onClick={handleTransfer}
          disabled={!selectedRoom}
        >
          Transfer
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RoomTransferModal;
