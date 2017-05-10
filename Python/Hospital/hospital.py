patient_id = 0

bed_number = 0

class Hospital(object):
    def __init__(self, name):
        self.name = name
        self.capacity = 10                          #small number just to test functionality
        self.patients = []
        return self

    def admit_patient(self, patient_obj):
        if len(self.patients) < self.capacity:
            global bed_number
            patient_obj.bed_number = bed_number
            bed_number += 1
            self.patients.append(patient_obj)
            return self
        else:
            return False

    def discharge_patient(self, name):
        for idx, jdx in enumerate(self.patients):
            if name == idx.name:                    # patient found
                idx.bed_number = None
                self.patients.remove(jdx)
        return self

class Patient(object):
    def __init__(self, name):
        self.name = name
        global patient_id
        self.patient_id = patient_id
        patient_id += 1
        self.allergies = []
        self.bed_number = None
        return self

    def add_allergies(self, args1, *args2):
        self.allergies.append(args1)
        for idx in *args2:
            self.allergies.append(idx)
        return self
